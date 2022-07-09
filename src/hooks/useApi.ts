import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
      .then((data) => {
        setData(data);
        setLoading(false);
      })
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
  const navigate = useNavigate();

  setLoading(true);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: method,
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => setData(data))
    .then(() => {
      setLoading(false);
      if (method === "POST") {
        navigate("/", { replace: false });
      }
    })
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
      .then((data) => {
        setData(data);
        setLoading(false);
      })
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
  const navigate = useNavigate();

  const deletePost = useCallback(() => {
    setLoading(true);
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(() => {setLoading(false)
      navigate("/", { replace: true })})
    .catch((error) => {
      setLoading(false);
      setError(error);
    });
 }, [])

  

  return {deletePost, loading, error };
};
