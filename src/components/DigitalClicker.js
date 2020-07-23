import React from 'react'

class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0,
    }

    clickHandler = () => {
        this.setState((prev) => {
            return {
                timesClicked: prev.timesClicked + 1,
            }
        })     
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}export default DigitalClicker
