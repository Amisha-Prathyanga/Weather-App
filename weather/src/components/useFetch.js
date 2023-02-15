import { useEffect, useState } from "react";

const CACHE_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = `${url}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (
        parsedData.timestamp &&
        Date.now() - parsedData.timestamp < CACHE_EXPIRY_TIME
      ) {
        // If the data is still fresh, return it from the cache
        setData(parsedData.data);
        setTimestamp(parsedData.timestamp);
        setIsPending(false);
        return;
      }
    }

    //abort fetch when going to pages
    const abortCont = new AbortController();

    setIsPending(true);
    setError(null);

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from the source");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setTimestamp(Date.now());
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data, timestamp: Date.now() })
        );
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
