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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return { data, isLoading, error };
};

export const useGetSinglePost = (id?: string) => {
  const [data, setData] = useState<IApiSingleData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [id]);

  return { data, isLoading, error };
};

export const useDeletePost = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const deletePost = useCallback(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setIsLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [id,navigate]);

  return { deletePost, isLoading, error };
};

export const useUpdatePost = (id?: string) => {
  const [data, setData] = useState<IApiSingleData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const update = useCallback(({ title, body }: IApiSingleData) => {
    setIsLoading(true);
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
        setIsLoading(false);
        navigate("/", { replace: false });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [id,navigate]);

  return { update, data, isLoading, error };
};



export const useCreatePost = () => {
  const [data, setData] = useState<IApiSingleData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const create = useCallback(({ title, body }: IApiSingleData) => {
    setIsLoading(true);
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
        setIsLoading(false);
        navigate("/", { replace: false });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [navigate]);

  return { create, data, isLoading, error };
};
