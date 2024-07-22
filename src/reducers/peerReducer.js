import { ADD_PEER,REMOVE_PEER } from "../actions/userPeerAction";


export const peerReducer = (state,action)=>{
    switch(action.type){
        case ADD_PEER:
            return {
                ...state,
                [action.payload.peerId]:{stream: action.payload.stream}
            }

        case REMOVE_PEER:
            // eslint-disable-next-line no-case-declarations
            const newState = Object.assign({}, state);
            delete newState[action.payload.peerId];
            return newState;

        default:
            return {...state};
    }
}

