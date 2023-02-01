import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

  const [isPending, setIsPennding] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    //abort fetch when going to pages
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from the source");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPennding(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPennding(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;