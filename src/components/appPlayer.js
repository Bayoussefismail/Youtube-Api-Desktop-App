import React, {useState, useEffect, useRef} from 'react'
import AppDetails from './appDetails'
import AppControls from './appControls'

function AppPlayer(props) {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    }) 
    const skipSong = (forward = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex
                temp++
                if(temp > props.songs.length - 1) {
                    temp = 0
                }
                return temp
            })
        } else {       
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex
                temp--
                if(temp < 0) {
                    temp = props.songs.length - 1
                }
                return temp
            }
            )
        }
    }
    return (
        <div className= "c-player">
        <div className="elements">
          <audio src={props.songs[props.currentSongIndex].music_src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <AppDetails song={props.songs[props.currentSongIndex]} />
            <AppControls 
            isPlaying= {isPlaying} 
            setIsPlaying={setIsPlaying}
            skipSong= {skipSong}
            />
            <p><strong>Next up:</strong>{props.songs[props.nextSongIndex].title} regards by {props.songs[props.nextSongIndex].artist}</p>
        </div>
        </div>
    )
}

export default AppPlayer
