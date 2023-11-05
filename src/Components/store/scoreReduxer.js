const defaultState = {
    scoreReducer: 3,
}

// action = { type: '', payload: '' };

export const scoreReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "count_score":
            return { ...state, score: state.scoreReducer + action.payload }//?
        default:
            return state
    }
}