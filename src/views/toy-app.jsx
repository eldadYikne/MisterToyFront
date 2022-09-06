import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { ToysList } from "../cmps/toy-list"
import { loadToys } from "../store/actions/toy.action"



export const ToyApp = () => {


    const { toys } = useSelector(state => state.toyModule)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])






    if (!toys) return <h1>Loading</h1>
    return <section>
        <Link to='toy/edit'>Add Toy </Link>
        <ToysList toys={toys} />
        <Outlet />
    </section>
}  