import { useState, useEffect } from "react";

const useFetch = (url) => {
  // State
  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Abort Controller
    const abortCont = new AbortController();
    // fetch
    async function loadCards() {
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) {
          // error coming back from server
          throw Error("Could not fetch the data for that resource");
        }
        const data = await response.json();
        setData(data);
        setError(null);
        setPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setPending(false);
        }
      }
    }
    // load
    loadCards();
    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, error, pending };
};

export default useFetch;
