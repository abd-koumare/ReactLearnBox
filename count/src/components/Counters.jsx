import React, {Component} from "react";
import Counter from './Counter';

class Counters extends Component {

    render() {
        return (
            <div>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    />
                )}
            </div>
        );
    }
}

export default Counters;