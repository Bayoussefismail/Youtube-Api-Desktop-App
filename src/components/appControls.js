import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faPause , faForward , faBackward } from '@fortawesome/free-solid-svg-icons'

function AppControls(e) {
    const isPlaying = () => {
            document.addEventListener('keydown', function(e) {
                console.log(e)
                 if (e.code == 'KeyK') {
                    return true
                 } 
                })
    }
    return (
        <div className="c-player--controls">
            <button className="skip-btn">
                <FontAwesomeIcon 
                icon={faBackward} 
                onClick={() => props.skipSong(false)} />
            </button>
            <button className="play-btn">
                 <FontAwesomeIcon 
                 icon={isPlaying? faPlay : faPause} 
                 onClick={() => props.setIsPlaying(!props.isPlaying)} />
            </button>
            <button className="skip-btn">
                 <FontAwesomeIcon 
                 icon={faForward}
                 onClick={() => props.skipSong()}
                  />
            </button>
        </div>
    )
}

export default AppControls
