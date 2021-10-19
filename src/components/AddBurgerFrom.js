import React, { Component } from 'react'

export default class AddBurgerForm extends Component {

    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()
    
    createBurger = (e) => {
        e.preventDefault()
        console.log(this.nameRef.current.value)
    }

    render() {
        return (
            <form action="burger-edit" onSubmit={this.createBurger}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" autoComplete='off' />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" autoComplete='off' />
                <select name="status" ref={this.statusRef} className="status">
                <option value="available">Доступно</option>
                <option value="unavailable">Убрать из меню</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" autoComplete='off' />
                <button type="submit">Добавить в меню</button>
            </form>
        )
    }
}
