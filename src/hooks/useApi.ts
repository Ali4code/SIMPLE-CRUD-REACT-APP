import { useState, useEffect } from "react";

export interface IApiSingleData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}


export const useGetList = () => {
  const [data, setData] = useState<IApiSingleData[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return { data, loading, error };
};
export const useCreate = ({ title, body, userId }: IApiSingleData) => {
  const [data, setData] = useState<IApiSingleData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  setLoading(true);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: { title },
      body: { body },
      userId: { userId },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => {
      setLoading(false);
      setError(error);
    });

  return { data, loading, error };
};
