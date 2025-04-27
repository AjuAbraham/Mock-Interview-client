import { codingQuestions, languages } from "@/utils/constants";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookIcon, LightbulbIcon } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { io } from "socket.io-client";

const CodeEditor = ({ roomId }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(codingQuestions[0]);
  const [language, setLanguage] = useState(languages[0]);
  const [code, setCode] = useState(selectedQuestion.starterCode[language.id]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      // Join the room using the roomId
      socket.emit("join-room", roomId);
    });

    socket.on("receive-code", (newCode) => {
      setCode(newCode);
    });

    // Handle question changes from other users
    socket.on("question-changed", ({ questionId, code: newCode }) => {
      const question = codingQuestions.find((q) => q.id === questionId);
      if (question) {
        setSelectedQuestion(question);
        setCode(newCode);
      }
    });

    // Handle language changes from other users
    socket.on("language-changed", ({ languageId, code: newCode }) => {
      const newLang = languages.find((l) => l.id === languageId);
      if (newLang) {
        setLanguage(newLang);
        setCode(newCode);
      }
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    return () => {
      console.log("Cleaning up socket listeners");
      if (socket.connected) {
        socket.emit("leave-room", roomId);
        socket.off("receive-code");
        socket.off("question-changed");
        socket.off("language-changed");
        socket.off("connect");
        socket.off("connect_error");
      }
    };
  }, [socket, roomId]);

  const handleCodeChange = (value) => {
    setCode(value || "");

    if (socket) {
      socket.emit("code-change", { roomId, code: value });
    }
  };

  const handleQuestionChange = (questionId) => {
    const question = codingQuestions.find(
      (question) => question.id === questionId
    );
    setSelectedQuestion(question);
    const newCode = question.starterCode[language.id];
    setCode(newCode);
    // Broadcast question change to everyone in the room
    if (socket) {
      socket.emit("question-change", { roomId, questionId, code: newCode });
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    const newCode = selectedQuestion.starterCode[newLanguage.id];
    setCode(newCode);
    // Broadcast language change to everyone in the room
    if (socket) {
      socket.emit("language-change", {
        roomId,
        languageId: newLanguage.id,
        code: newCode,
      });
    }
  };

  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[calc-100vh-4rem-1px]"
    >
      <ResizablePanel>
        <ScrollArea className="h-[600px] w-full overflow-auto">
          <div className="p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {selectedQuestion.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose your language and solve the problem
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Select
                    value={selectedQuestion.id}
                    onValueChange={handleQuestionChange}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select question" />
                    </SelectTrigger>
                    <SelectContent>
                      {codingQuestions.map((q) => (
                        <SelectItem key={q.id} value={q.id}>
                          {q.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-[150px]">
                      {/* SELECT VALUE */}
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={`../src/assets/${language.name}.png`}
                            alt={language.name}
                            className="w-5 h-5 object-contain"
                          />
                          {language.name}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    {/* SELECT CONTENT */}
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.id} value={lang}>
                          <div className="flex items-center gap-2">
                            <img
                              src={`../src/assets/${lang.name}.png`}
                              alt={lang.name}
                              className="w-5 h-5 object-contain"
                            />
                            {lang.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookIcon className="h-5 w-5 text-primary/80" />
                  <CardTitle>Problem Description</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="whitespace-pre-line">
                      {selectedQuestion.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                  <CardTitle>Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 space-y-4">
                    {selectedQuestion.examples.map((example, index) => (
                      <div key={index} className="space-y-2">
                        <p className="font-medium text-sm">
                          Example {index + 1}:
                        </p>
                        <ScrollArea className="h-full w-full rounded-md">
                          <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                            <div>Input: {example.input}</div>
                            <div>Output: {example.output}</div>
                            {example.explanation && (
                              <div className="pt-2 text-muted-foreground">
                                Explanation: {example.explanation}
                              </div>
                            )}
                          </pre>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60} maxSize={100}>
        <Editor
          height={"100%"}
          defaultLanguage={language.id}
          language={language.id}
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
          options={{
            minimap: { enabled: false },
            fontSize: 18,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 16, bottom: 16 },
            wordWrap: "on",
            wrappingIndent: "indent",
          }}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CodeEditor;
