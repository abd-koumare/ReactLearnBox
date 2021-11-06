import React, {Component} from "react";
import Counters from "./Counters";
import Nav from './Nav';

class App extends Component {
    state = {
        counters: [
            {
                'id': 1,
                'value': 0
            },
            {
                'id': 2,
                'value': 0
            },
            {
                'id': 3,
                'value': 4
            },
            {
                'id': 4,
                'value': 0
            },
        ]
    }


    handleIncrement = (counter) => {
        const index = this.state.counters.indexOf(counter);
        if (index > -1) {
            const counters = [...this.state.counters];
            counters[index] = {...counter, 'value': counters[index].value + 1}
            this.setState({counters})
        }
    }
    handleDecrement = (counter) => {
        const index = this.state.counters.indexOf(counter);
        if (index > -1) {
            const counters = [...this.state.counters];
            const newValue = counters[index].value > 0 ? counters[index].value - 1 : counters[index].value;
            counters[index] = {...counter, 'value': newValue}
            this.setState({counters})
        }
    }

    handleDelete = (id) => {
        const counters = [...this.state.counters];
        this.setState({counters: counters.filter(counter => counter.id !== id)});
    }

    handleReset = () => {
        const counters = [...this.state.counters];
        this.setState({counters: counters.map(counter => counter = {...counter, 'value': 0})})
    }
    handleAdd = () => {
        if (this.state.counters.length === 0) {
            const counters = [{id: 0, value: 0}]
            this.setState({counters});
        } else {
            let counters = [...this.state.counters];
            const newId = counters[this.state.counters.length - 1].id + 1;
            counters = [...counters, {id: newId, value: 0}]
            this.setState({counters});
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav counters={this.state.counters}/>
                <div>
                    <button onClick={this.handleReset} className="btn btn-dark m-4">Reset</button>
                    <button onClick={this.handleAdd} className="btn btn-secondary m-4">Add</button>
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                </div>
            </React.Fragment>
        );
    }


}

export default App;