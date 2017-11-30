const initialVoteState = { angular: 0, react: 0, vue: 0 };

export function votesReducer(state=initialVoteState, action){
    switch(action.type){
        case "VOTE":
            if (action.framework === 'angular'){
                return Object.assign({}, state, {
                    angular: state.angular + 1
                });
            } else if (action.framework === 'react'){
                return Object.assign({}, state, {
                    react: state.react + 1
                });
            } else {
                return Object.assign({}, state, {
                    vue: state.view + 1
                });
            }
        default:
            return state;
    }

}
