import React, { Component } from "react";
import { connect } from "react-redux";

class Clock extends Component {
    render() {
        return (
            <span>Tijd: {this.props.time}</span>
        )
    }
}

const mapStateToProps = state => {
    return {
        time: state.time
    }
};

const ConnectedClock = connect(mapStateToProps)(Clock);
export { ConnectedClock as default };
