import React, { Component } from 'react';

export class Timer extends Component {

    state = {
        seconds: Math.ceil((JSON.parse(localStorage.codeSent - new Date().getTime())) / 1000),
        interval: null
    }

    componentDidMount() {
        const interval = setInterval(this.Timer, 1000);
        this.setState({ interval })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    Timer = () => {
        if(this.state.seconds <= 1) {
            this.props.closeTimer()
            clearInterval(this.state.interval);
        } else {
            this.setState({ seconds: this.state.seconds -1 });
        }
    }

    render() {
        const { seconds } = this.state

        return (
            <span style={{
                fontSize: 28,
                color: '#2979ff'
            }}>{seconds}</span>
        );
    }
}

export default Timer;
