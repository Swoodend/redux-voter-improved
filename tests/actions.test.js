import * as actions from '../src/actions/voteAction.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("the voteAction action creator", () => {
    it("should create an action to cast a vote", () => {
        let expectedAction = {
            type: "VOTE",
            payload: "react"
        };
        expect(actions.voteAction("react")).toEqual(expectedAction);
    });
});

describe("the updateCurrentPercentages action creator", () => {
   it("should create an action to update current percentages", () => {
       let voteState = { angular: 0, react: 1, vue: 0}
       let expectedAction = {
           type: "UPDATE_CURRENT_PERCENTAGES",
           payload: voteState
       };
       expect(actions.updateCurrentPercentages(voteState)).toEqual(expectedAction);
   });
});

describe("the updatePastPercentages action creator", () => {
    it("should create an action to update past percentages" , () => {
       let voteState = { angular: 0, react: 1, vue: 2}
       let expectedAction = {
           type: "UPDATE_PAST_PERCENTAGES",
           payload: voteState
       };
       expect(actions.updatePastPercentages(voteState)).toEqual(expectedAction);
    });
});

describe("the castVote action", () => {
    it("should call the voteAction action creator", () => {
        let initialState = {
            currentPercentages: { react: 50},
            pastPercentages: { react: 25 },
            votes: { react:  4 }
        };

        let store = mockStore(initialState);
        store.dispatch(actions.castVote('react'));

        let actionsFired = store.getActions();

        let expectedVoteActionResult = {type: "VOTE", payload: "react"};
        
        //we pass the currentPercentages into updatePastPercentage action creator
        let expectedPastPercentagesResults = {
            type: "UPDATE_PAST_PERCENTAGES", 
            payload: { react: 50 }
        };
        //we pass the current voting state into updatePercentages action creator
        let expectedCurrentPercentagesResults = {
            type: "UPDATE_CURRENT_PERCENTAGES",
            payload: { react: 4 } 
        };
        expect(actionsFired).toHaveLength(3);
        expect(actionsFired[0]).toEqual(expectedPastPercentagesResults);
        expect(actionsFired[1]).toEqual(expectedVoteActionResult);
        expect(actionsFired[2]).toEqual(expectedCurrentPercentagesResults);
    });
});