import React from 'react'
import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'

class App extends React.Component {
    render() {
        return (
            <div className="burder-paradise">
                <div className="menu">
                    <Header title="Very Hot Burder" amount={10} hout={true} />
                </div>
                <Order />
                <MenuAdmin />
            </div>
        )
    }
}

export default App