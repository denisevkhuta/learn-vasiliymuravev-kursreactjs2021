import React, { Component } from 'react'

export default class Order extends Component {

    renderOrder = (key) => {
        const burger = this.props.burgers[key]
        const count = this.props.order[key]

        const isAvailable = burger && burger.status === 'available'

        if (!isAvailable) {
            return <li key={key} className="unavailable">
                Извините, {burger ? burger.name : 'бургер'} временно не доступен
            </li>
        }

        return (
            <li>
                <span>
                    <span>{count} </span>
                    шт. {burger.name}
                    <span>{count * burger.price} руб.</span>
                    <button className="cancelItem">&times;</button>
                </span>
            </li>
        )
    }

    render() {

        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key]
            const count = this.props.order[key]

            const isAvailable = burger && burger.status === 'available'
            if (isAvailable) {
                return prevTotal + burger.price * count
            }

            return prevTotal

        }
            , 0)

        return (
            <div className="order-wrap">
                <h2>Ваш заказ</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    <div className="total_wrap">
                        <div className="total_wrap-final">
                            Итого: {total} руб.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
