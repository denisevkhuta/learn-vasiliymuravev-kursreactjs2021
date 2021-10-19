import React, { Component } from 'react'

export default class Burger extends Component {

    render() {

        const { name, image, price, desc, status } = this.props.details
        const isAvailable = status === 'available'

        return (
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt="{name}<" />
                </div>
                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className="price">{price} ₽</span>
                    </h3>
                    <p>{desc}</p>
                    <button onClick={() =>  this.props.addToOrder(this.props.index)} className="buttonOrder" disabled={!isAvailable}>{isAvailable ? 'Заказать' : 'Временно нет'}</button>
                </div>
            </li>
        )
    }
}
