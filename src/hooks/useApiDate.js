import { useEffect, useState } from "react";

function useApiData(apiUrl, apiKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, apiKey]);

  return { data, loading };
}

export default useApiData;
