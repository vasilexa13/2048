const defaultState = {
    sizeReduser: 4,
}

// action = { type: '', payload: '' };

export const sizeReducers = (state = defaultState, action) => {
    switch (action.type) {
        case "change_size":
            return { ...state, sizeReduser: action.newSize }
        default:
            return state
    }
}