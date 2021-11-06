import React, {Component} from "react";


class Nav extends Component {

    greaterThanZero() {
        return this.props.counters.filter(counter => counter.value > 0).length;
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand mx-2">Navbar</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">&nbsp;</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <span className="badge bg-primary p-2">{this.greaterThanZero()}</span>
                            </li>

                        </ul>
                    </div>
                </nav>
            </React.Fragment>

        );
    }
}

export default Nav;