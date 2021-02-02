import React from 'react'
import {useState, useEffect} from 'react'
import AppPlayer from './appPlayer'
import VideoApp from './VideoApp'




function App() {
    const [songs, setSongs] = useState([{
        title: "song",
        artist: "artist",
        img_src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
        music_src: "music source"
    },
    {
        title: "song",
        artist: "artist",
        img_src: "image source",
        music_src: "music source"
    }
],)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

    useEffect(() => {
        setNextSongIndex(() => {
            if(currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1
            }
        })
    }, [currentSongIndex]);
    
return (
    
    <VideoApp />
    
     
)
}


export default App