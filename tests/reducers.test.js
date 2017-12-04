import { votesReducer } from '../src/reducers/votesReducer.js';
import { currentPercentageReducer } from '../src/reducers/currentPercentageReducer.js';


describe("the votesReducer reducer", () => {
    let defaultState = { angular: 0, react: 0,  vue: 0 };    
    
    it("should return the correct default state if no action type is matched", () => {
        expect(votesReducer(defaultState, {})).toEqual(defaultState);
    });

    it("should handle action type VOTE by incrementing the correct framework votes by one ", () => {
        let expectedState = { angular: 0, react: 1, vue: 0 };
        expect(votesReducer(defaultState, {type:"VOTE", payload:"react"})).toEqual(expectedState);
    });
});

describe("the currentPercentages reducer", () => {
    let defaultState = { angular: 0, react: 0, vue: 0 };    
    
    it("should return the correct default state if no action type is matched", () => {
        expect(currentPercentageReducer(defaultState, {})).toEqual(defaultState);  
    });

    it("should return the correct percentages given a particular vote state", () => {
        let voteState = { angular: 1, react: 2, vue: 1 };
        let action = {
            type: "UPDATE_CURRENT_PERCENTAGES",
            payload: voteState
        }
        let expectedOutput = { angular: 25, react: 50, vue: 25 };
        
        expect(currentPercentageReducer(defaultState, action)).toEqual(expectedOutput);
    })
});