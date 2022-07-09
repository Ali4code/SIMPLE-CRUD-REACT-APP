import React, { ReactElement, FC } from "react";
import { Grid } from "@mui/material";
import { useGetList } from "../hooks/useApi";
import SinglePost from "../components/SinglePost";

const Home: FC<any> = (): ReactElement => {
  const { data, loading, error } = useGetList();
  return (
    <Grid container justifyContent="center" alignItems="flex-start" direction="row" paddingBottom={15}>
      {data?.map((item) => {
        return <SinglePost key={item.id} {...item} />;
      })}
    </Grid>
  );
};

export default Home;
