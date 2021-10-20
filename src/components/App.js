import React from 'react'
import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'
import Burger from './Burger'
import sampleBurgers from '../sample-burgers'
import base from '../base'

class App extends React.Component {

    state = {
        burgers: {},
        order: {},
    }

    componentDidMount() {
        const { params } = this.props.match

        const localStorageRef = localStorage.getItem(params.restaurantId)
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }

        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        })
    }

    componentDidUpdate() {
        const { params } = this.props.match
        console.log(params)
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
    }

    // componentWillMount() {
    //     base.removeBinding(this.ref)
    // }

    addBurger = (burger) => {
        console.log('addBurger', burger)
        const burgers = { ...this.state.burgers }
        burgers[`burger${Date.now()}`] = burger
        this.setState({ burgers })
    }

    loadSampleBurgers = () => {
        console.log('loadSampleBurgers')
        const burgers = sampleBurgers
        this.setState({ burgers })
    }

    addToOrder = (key) => {
        const order = { ...this.state.order }
        order[key] = order[key] + 1 || 1
        this.setState({ order })
    }

    render() {
        return (
            <div className="burder-paradise">
                <div className="menu">
                    <Header title="Very Hot Burder" amount={10} hout={true} />
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(
                            burger =>
                                <Burger
                                    key={burger}
                                    index={burger}
                                    addToOrder={this.addToOrder}
                                    details={this.state.burgers[burger]}
                                />
                        )}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order} />
                <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers} />
            </div>
        )
    }
}

export default App