import { useEffect, useState } from "react";

const useFetch = (params) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.quotable.io/${params}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(params);
      getData();
    }, 500);
    return () => clearTimeout(timer);
  }, [params]);

  return { data, loading, getData };
};

export default useFetch;
