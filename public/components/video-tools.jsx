import { useEffect, useState } from 'react';
import axios from 'axios';

import ReactPlayer from 'react-player/youtube';

  export default function VideoTools() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
      axios.get('https://youtube.googleapis.com/youtube/v3/search?', {
        params: {
          part: 'snippet',
          channelId:'UCgSihFkBZPGN2VQAPXgBMLw',
          key:'AIzaSyCZBC--6XOyC7CCjKqFfNyXgfZ3ITk33rw',
          videoType:'any',
          maxResults:'10',
          order:'date',
        }
      })
      .then(function (response) {
        setVideos(response.data.items)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }, [])
   
    return (
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {videos.filter((data, idx) => idx !== 6).map((videos) => (
          <li key={videos.id.videoId} className="relative">
            <div className="group  block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <ReactPlayer width="100%" url={`https://www.youtube.com/watch?v=${videos.id.videoId}`} />
            </div>
            <p className="pointer-events-none mt-2 block truncate text-lg font-medium text-blue-900">{videos.snippet.title.replaceAll('&quot;', '')}</p>
          </li>
        ))}
      </ul>
    )
    
  }
  