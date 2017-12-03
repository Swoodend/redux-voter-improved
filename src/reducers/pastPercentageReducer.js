const initialPastPercentages = {
    angular: 0,
    react: 0,
    vue: 0
};

export function pastPercentageReducer(state=initialPastPercentages, action){
    switch (action.type){
        case "UPDATE_PAST_PERCENTAGES":
            let { angular, react, vue } = action.payload;
            return Object.assign({}, state, {
                angular,
                react,
                vue
            })
        default:
            return state;

    }
}