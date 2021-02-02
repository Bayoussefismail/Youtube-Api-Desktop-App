import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
    
   
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
    <Grid container spacing={2}>
           <Grid item xs={6}>
                      <Paper className='row'>
                    
                     <div>
        <iframe src={videoSrc}  volume="50%" title="Video player" height="auto"/>
        </div>
          </Paper>
          <Paper className='row'>
          <div className="c-player--details">
         
            <h3 className="details-title">{video.snippet.title}</h3>
            
            </div>
             </Paper>
        </Grid>
          </Grid>
          
    </div>
  
  );
};

export default VideoDetail;