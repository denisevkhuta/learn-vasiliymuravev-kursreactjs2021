import React from 'react'
import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'
import sampleBurgers from '../sample-burgers'

class App extends React.Component {

    state = {
        burgers: {},
        order: {},
    }

    addBurger = (burger) => {
        console.log('addBurger', burger)
        const burgers = {...this.state.burgers}
        burgers[`burger${Date.now()}`] = burger
        this.setState({burgers})
    }

    loadSampleBurgers = () => {
        console.log('loadSampleBurgers')
        const burgers = sampleBurgers
        this.setState({burgers})
    }

    render() {
        return (
            <div className="burder-paradise">
                <div className="menu">
                    <Header title="Very Hot Burder" amount={10} hout={true} />
                </div>
                <Order />
                <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers} />
            </div>
        )
    }
}

export default App