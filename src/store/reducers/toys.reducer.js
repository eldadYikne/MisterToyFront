

const INITIAL_STATE = {
    toys:null,
    isLoading: false,
}

export function toyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_TOYS':
            return {...state,toys: action.toys}
            
        default:
            return state;
    }
}