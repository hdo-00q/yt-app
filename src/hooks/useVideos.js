import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyBVq0q2Gk-FUoJQ9uXf7sQSxU_PqY2h3xE';

const useVideos = (defaultSerchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSerchTerm);
  }, [defaultSerchTerm]);

  const search = async term => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          type: 'video',
          key: `${KEY}`
        }
      });
      setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
