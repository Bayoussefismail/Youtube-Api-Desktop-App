import React from 'react';
import SearchBar from './Searchbar';
import youtube from './api';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    
    }

    render() {
        return (
            <Grid container spacing={2}>
              <Grid item xs={3}>
               <Paper className='row'>
            <div className='ui container c-player' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                </div>
                </Paper>
                  
                      <Paper className='row'>
                      <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                      </Paper>              
                  
                </Grid>
             
                   
                
                  
                
                  
                    <Grid item xs={6}>
                      <Paper className='row'>
                      <VideoDetail video={this.state.selectedVideo}/>
                      </Paper>
                      </Grid>
               </Grid>
            
        )
    }
}

export default App;