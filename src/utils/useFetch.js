'use client'

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        const result = await response.json()
        setData(result)
      
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;