import React, { ReactElement, FC } from "react";
import { Grid, Typography } from "@mui/material";
import { useGetList } from "../hooks/useApi";
import SinglePost from "../components/SinglePost";

const Home: FC<any> = (): ReactElement => {
  const { data, loading, error } = useGetList();
  return (
    <Grid container justifyContent="center" alignItems="center" gap={10} direction="row">
      {data?.map((item) => {
        return <SinglePost title={item.title} body={item.body} />;
      })}
    </Grid>
  );
};

export default Home;
