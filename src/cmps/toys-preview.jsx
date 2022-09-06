import { Link } from "react-router-dom"

export const ToysPreview = ({ toy }) => {


        return <div className="toy-card">
                <h1 className="name-toy">{toy.name} </h1>
                <h1>price:{toy.price} </h1>
                <h1>id:{toy._id} </h1>
                <Link to={`toy/edit/${toy._id}`}>Edit</Link> <br/>
                <Link to={`toy/${toy._id}`}>Details</Link>
        </div>
}