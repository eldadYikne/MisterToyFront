import { toyService } from "../../services/toy.service"

export function loadToys() {
    return (dispatch, getState) => {

        const { filterBy } = getState().toyModule
        console.log('filterBy',filterBy)
        
        toyService.query(filterBy)
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys: toys })
            })
            .catch(() => console.log('error action toy'))
    }


}

export function removeToy(toyId) {
    return (dispatch, getState) => {
        toyService.remove(toyId)
            .then(() => dispatch({ type: 'REMOVE_TOY', toyId }))
    }
}
export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }

}