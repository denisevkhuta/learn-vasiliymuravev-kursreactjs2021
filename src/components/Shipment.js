import React, { Component } from 'react'

export default class Shipment extends Component {
    render() {

        const { total } = this.props
        const shipping = total > 0 && total < 500 ? 350 : 99
        const shippingNeon = shipping === 99 ? (
            <span className="font-effect-neon total_wrap-cheap">{shipping} руб.</span>
        ) : (
            <span>{shipping} руб.</span>
        )

        return (
            <div className="total">
                <div className="total_wrap">

                    <div>
                        <div>Доставка: {total > 0 ?  shippingNeon : ''}</div>
                        <div className="total_wrap-free">
                            {total < 500 ? `Закажате еще на ${500 - total} руб. для доставки для 99 руб.` : null}
                        </div>
                    </div>

                    <div className="total_wrap-final">
                        Итого: {total} руб.
                    </div>
                </div>
            </div>
        ) 
    }
}
