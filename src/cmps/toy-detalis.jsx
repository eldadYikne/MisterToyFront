import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"

export const ToyDetails = () => {

    const [toy, setToy] = useState()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [params.toyId])

    const loadToy = () => {
        const toyId = params.toyId
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
    }

    const onBack = () => {
        navigate('/')
    }
    if (!toy) return <span></span>
    return <section className="toy-details">
        <h1>ToyDetails</h1>
        <h1>{toy.name}</h1>
        <h1>In Stock:{toy.inStock}</h1>
        <h1>reviews</h1>

        <h1>{toy.reviews.map(review => {
            return <ul key={review.text} className="reviews-details">
                <li>Name:{review.name}</li>
                <li>Review:{review.text}</li>
                <li>Raet:{review.rate}</li>
                <hr></hr>
            </ul>
        })}</h1>
        <button onClick={onBack}>back </button>
    </section>

}