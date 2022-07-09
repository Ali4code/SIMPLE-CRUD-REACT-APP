import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export interface IApiSingleData {
  userId?: number;
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
      .then(() => {
        setLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id,navigate]);

  return { deletePost, loading, error };
};

export const useUpdatePost = (id?: string) => {
  const [data, setData] = useState<IApiSingleData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const update = useCallback(({ title, body }: IApiSingleData) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => {
        setLoading(false);
        navigate("/", { replace: false });
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id,navigate]);

  return { update, data, loading, error };
};



export const useCreatePost = () => {
  const [data, setData] = useState<IApiSingleData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const create = useCallback(({ title, body }: IApiSingleData) => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => {
        setLoading(false);
        navigate("/", { replace: false });
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [navigate]);

  return { create, data, loading, error };
};
