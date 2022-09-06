import { toyService } from "../../services/toy.service"

export function loadToys() {
    return (dispatch, getState) => {
        toyService.query()
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys: toys })
            })
            .catch(()=>console.log('error action toy'))
    }


}