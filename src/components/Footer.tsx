import React, { FC, ReactElement } from "react";
import { styled } from "@mui/system";
import {  Container, Grid, Typography } from "@mui/material";

const Footer: FC = (): ReactElement => {
  return (
    <CustomDiv>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" color="#FFF">Setvi React Test</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="#FFF">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </CustomDiv>
  );
};

export const CustomDiv = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: "0",
  width: "100%",
  height: "auto",
  backgroundColor: theme.palette.primary.main,
  paddingTop: "1rem",
  paddingBottom: "1rem",
}));

export default Footer;
