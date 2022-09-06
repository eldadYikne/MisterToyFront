import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { ToyFilter } from "../cmps/filter-app"
import { ToysList } from "../cmps/toy-list"
import { loadToys, removeToy, setFilterBy } from "../store/actions/toy.action"



export const ToyApp = () => {


    const { toys } = useSelector(state => state.toyModule)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onChangeFilter = (filterBy) => {

        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())

    }



    if (!toys) return <h1>Loading</h1>
    return <section>
        <ToyFilter onChangeFilter={onChangeFilter} />
        <Link to='toy/edit'>Add Toy </Link>
        <ToysList toys={toys} onRemoveToy={onRemoveToy} />

        <Outlet />
    </section>
}  