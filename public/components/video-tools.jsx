import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import videojs from 'video.js';
import { PlayIcon } from '@heroicons/react/20/solid';

export default function VideoTools() {
  const [videos, setVideos] = useState([]);

  var config = {
    method: 'get',
    url: 'https://api.vimeo.com/users/157509679/albums/10183038',
    headers: { 
      'Authorization': 'Bearer 6ac60c38bbce2312bdf5f2e2a4043969', 
    }
  };

  useEffect(() => {
    axios(config)
    .then(function (response) {
      console.log('Showcase', response);
      setVideos(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, [])



   


    
   
    return ( 
      <section className="mx-auto max-w-4xl">
        <iframe src="https://vimeo.com/showcase/10183038/embed" width="100%" height="500" frameaBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Your First 90-Days in a New Role"></iframe>
      </section>
    )
    
  }
  