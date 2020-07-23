import React from 'react'

class YouTubeDebugger extends React.Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    setBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate:12
            }
        })
    }

    setResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }
    

    render(){
        return(
            <div>
                <button onClick={this.setBitrate} className='Bitrate'>Bitrate = {this.state.settings.bitrate}</button>
                <br></br>
                <button onClick={this.setResolution} className='Resolution'>Resolution = {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}export default YouTubeDebugger

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
