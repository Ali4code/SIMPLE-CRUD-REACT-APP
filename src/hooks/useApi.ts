import { useState, useEffect } from "react";

export interface IApiSingleData {
  userId: number;
  id?: number;
  title: string;
  body: string;
  method?: string;
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

export const useCreateOrUpdatePost = ({ title, body, userId, method }: IApiSingleData) => {
  const [data, setData] = useState<IApiSingleData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  setLoading(true);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: method,
    body: JSON.stringify({
      title: title ,
      body: body,
      userId: userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => setData(data))
    .then(() => setLoading(false))
    .catch((error) => {
      setLoading(false);
      setError(error);
    });

  return { data, loading, error };
};

export const useGetSinglePost = (id?: string) => {
  const [data, setData] = useState<IApiSingleData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id]);

  return { data, loading, error };
};


export const useDeletePost = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });

  return { loading, error };
};


