const counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1

        case 'DECREMENT_COUNT':
            if (state > 0) {
                return state - 1
            } else {
                return state
            }
        default:
            return state
    }
}

export default counterReducer