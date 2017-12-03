const intitialPercentages = {
    angular: 0,
    react: 0,
    vue: 0
}

export function currentPercentageReducer(state=intitialPercentages, action){
    switch (action.type){
        case "UPDATE_CURRENT_PERCENTAGES":
            let totalVotes = action.payload.angular + action.payload.react + action.payload.vue
            let pctAngular = Math.round((action.payload.angular / totalVotes) * 100);
            let pctReact = Math.round((action.payload.react / totalVotes) * 100);
            let pctVue = Math.round((action.payload.vue / totalVotes) * 100);
            
            return Object.assign({}, state, {
                angular: pctAngular,
                react: pctReact,
                vue: pctVue
            });
            
        default:
            return state
    }
}