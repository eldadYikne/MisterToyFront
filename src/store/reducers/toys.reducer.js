

const INITIAL_STATE = {
    toys: null,
    filterBy: ''
}

export function toyReducer(state = INITIAL_STATE, action) {
    var toys
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'REMOVE_TOY':
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys }
        case 'SET_FILTER_BY':
            return { ...state, filterBy: action.filterBy }

        default:
            return state;
    }
}