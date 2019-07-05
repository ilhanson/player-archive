import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://web-sandbox.onefootball.com/assignments/';

const useApi = (requestUrl) => {
  const [data, setData] = useState();
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // reset fields
      // this will aslo assure to reset data and errors
      // if requestUrl is empty
      setError(false);
      setData();

      // and request only if requestUrl is present
      if (requestUrl) {
        try {
          const result = await axios.get(API_URL + requestUrl);
          setData(result.data);
        } catch (error) {
          // common error handler code can be run here
          setError(true);
        }
      }
    };

    fetchData();
  }, [requestUrl]);

  return [data, isError];
};

export const useDataApi = (playerId) => {
  const requestUrl = playerId ? `player/data/${playerId}.json` : '';
  return useApi(requestUrl);
};

export const useProfileApi = (profileId) => {
  const requestUrl = profileId ? `player/profile/${profileId}` : '';
  return useApi(requestUrl);
};

export default useApi;