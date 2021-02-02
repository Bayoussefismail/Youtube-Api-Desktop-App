import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 655,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '300%',
    height: '100%',
    display: 'relative',
    marginTop: "50px",
    overflow: 'hidden',
    justifyContent: 'left',
  },
  gridListTile: {
    width: '0%',

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
const VideoItem = ({video , handleVideoSelect}) => {
    const classes = useStyles();
    return (
        <div className="grid">
        <Grid className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
        <div>
        <div onClick={ () => handleVideoSelect(video)} >
        
        
          <GridListTile key={video.snippet.thumbnails.medium.url}>
          
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <GridListTileBar
              title={video.snippet.title}
              
            />
           
          </GridListTile>
        </div>
     
         </div>
          </GridList>
         </Grid>
         </div>
    )}
export default VideoItem;