import React, {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <div className="m-4" key={this.props.counter.id}>
                {this.getBadge(this.props.counter.value)}
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-success mx-2">+
                </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-warning mx-2">-
                </button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger mx-2">Delete
                </button>
            </div>
        )
    }

    getBadge(value){
        return  (value > 0 ?
            <span className="badge mx-4  bg-primary">{value}</span> : <span className="badge mx-2 p-2  bg-warning">Zero</span>);
    }
}

export default Counter;