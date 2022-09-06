import { useFormRegister } from "../hooks/useFormRegister"

export const ToyFilter = ({ onChangeFilter }) => {

    const [register] = useFormRegister({
        name: '',
        stock: '',
        label: '',
        sortBy: '',
    }, onChangeFilter)

    return <form className="filter" >
        <label htmlFor="name">Name:</label>
        <input {...register('name', 'text')} />

        <label htmlFor="select">Stock:</label>
        <select {...register('select', 'select')} id="select" name="stock" >
            <option value="all">All </option>
            <option value="true">In stock </option>
            <option value="false">Out of stock </option>
        </select>

        <label htmlFor="sortBy">Sort By:</label>
        <select {...register('select', 'select')} id="sortBy" name="sortBy" >
            <option value="name">name </option>
            <option value="price">price</option>
            <option value="created">created </option>
        </select>



    </form>



}

