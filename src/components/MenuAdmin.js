import React, { Component } from 'react'
import AddBurgerForm from './AddBurgerFrom'


export default class MenuAdmin extends Component {
    render() {
        return (
            <div className="menu-admin">
                <h2>Управление меню</h2>
                <AddBurgerForm />
            </div>
        )
    }
}
