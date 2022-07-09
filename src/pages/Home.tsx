import React, { ReactElement, FC } from "react";
import { Grid, Typography } from "@mui/material";
import { useGetList } from "../hooks/useApi";
import SinglePost from "../components/SinglePost";
import WithLoader from "../components/ui/WithLoader";

const Home: FC<any> = (): ReactElement => {
  const { data, isLoading, error } = useGetList();
  return (
    <WithLoader isLoading={isLoading}>
      {error && (
        <Typography variant="h6" color="red">
          {JSON.stringify(error)}
        </Typography>
      )}
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        direction="row"
        paddingBottom={15}
      >
        {data?.map((item) => {
          return <SinglePost key={item.id} {...item} />;
        })}
      </Grid>
    </WithLoader>
  );
};

export default Home;
