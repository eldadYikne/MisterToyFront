import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { toyService } from "../services/toy.service"

export const ToyEdit = (props) => {

    const params = useParams()
    const navigate = useNavigate()

    const [toy, handleChange, setToy] = useForm({
        name: '',
        price: '',
        inStock: true
    })
    useEffect(() => {
        const toyId = params.toyId
        if (!toyId) return
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
    }, [])


    const onSaveToy = (ev) => {
        ev.preventDefault()
        toyService.save({ ...toy })
            .then(() => {
                navigate('/')
            })
    }
    const goBack = () => {
        navigate('/')
    }
    return <section>
        <h1>{toy._id ? 'Edit' : 'Add'} </h1>
        <form onSubmit={onSaveToy}>
            <label htmlFor="name">Name</label>
            <input type='search' placeholder='Enter name' onChange={handleChange} value={toy.name} name="name" id="name" />
            <label htmlFor="price">Price</label>
            <input type='number' min="20" max="300" onChange={handleChange} value={toy.price} name="price" id="price" />
            <label htmlFor="inStock">is in Stock:</label>
            <select id="cars" onChange={handleChange} value={toy.inStock} name="inStock">
                <option value='true'>In stock</option>
                <option value='flase'>Out of stock</option>
            </select>
            <button>Add </button>
            <button onClick={goBack}> Back</button>
        </form>
    </section>
}