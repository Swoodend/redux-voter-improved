export const voteAction = (framework) => {
    return {
        type: "VOTE",
        payload: framework
    }
}

export const updateCurrentPercentages = (voteState) => {
    return {
        type: "UPDATE_CURRENT_PERCENTAGES",
        payload: voteState
    }
}

export const updatePastPercentages = (voteState) => {
    return {
        type: "UPDATE_PAST_PERCENTAGES",
        payload: voteState
    }
}

export const castVote = (framework) => (dispatch, getState) => {
    dispatch(updatePastPercentages(getState().currentPercentages));
    dispatch(voteAction(framework));
    dispatch(updateCurrentPercentages(getState().votes));    
}