import { useState, useEffect } from 'react';
import { Envs } from '../../ENVS/Envs';
import { API ,MESSAGE } from '../../appConstant';
const useFetchData = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Envs.deploymentUrl}/${API}/${MESSAGE}`);
        const data = await response.json();
        console.log("data" ,data)
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return { message };
};

export default useFetchData;
