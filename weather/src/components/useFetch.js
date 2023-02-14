// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   const [isPending, setIsPennding] = useState(true);

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     //abort fetch when going to pages
//     const abortCont = new AbortController();

//     fetch(url, { signal: abortCont.signal })
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Could not fetch data from the source");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//         setIsPennding(false);
//         setError(null);
//       })
//       .catch((err) => {
//         if (err.name === "AbortError") {
//           console.log("fetch aborted");
//         } else {
//           setIsPennding(false);
//           setError(err.message);
//         }
//       });

//     return () => abortCont.abort();
//   }, [url]);

//   return { data, isPending, error };
// };

// export default useFetch;


// ------------------------------------caching all the cities-------------------------------

import { useEffect, useState } from "react";

const CACHE_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem(url);
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
        localStorage.setItem(url, JSON.stringify({ data, timestamp }));
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


// ----------------------------------caching with specified city-------------------------

// import { useEffect, useState } from "react";

// const CACHE_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

// const useFetch = (url, city) => {
//   const [data, setData] = useState(null);
//   const [timestamp, setTimestamp] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const cacheKey = `${url}-${city}`;
//     const cachedData = localStorage.getItem(cacheKey);
//     if (cachedData) {
//       const parsedData = JSON.parse(cachedData);
//       if (
//         parsedData.timestamp &&
//         Date.now() - parsedData.timestamp < CACHE_EXPIRY_TIME
//       ) {
//         // If the data is still fresh, return it from the cache
//         setData(parsedData.data);
//         setTimestamp(parsedData.timestamp);
//         setIsPending(false);
//         return;
//       }
//     }

//     //abort fetch when going to pages
//     const abortCont = new AbortController();

//     setIsPending(true);
//     setError(null);

//     fetch(url, { signal: abortCont.signal })
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Could not fetch data from the source");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//         setTimestamp(Date.now());
//         localStorage.setItem(
//           cacheKey,
//           JSON.stringify({ data, timestamp: Date.now() })
//         );
//         setIsPending(false);
//         setError(null);
//       })
//       .catch((err) => {
//         if (err.name === "AbortError") {
//           console.log("fetch aborted");
//         } else {
//           setIsPending(false);
//           setError(err.message);
//         }
//       });

//     return () => abortCont.abort();
//   }, [url, city]);

//   return { data, isPending, error };
// };

// export default useFetch;
