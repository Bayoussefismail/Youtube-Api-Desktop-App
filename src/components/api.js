import axios from 'axios';
// mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyAXlejlzC8AtqxJyN5KL0i0lcJ0lgv1Jw8"
    }
})