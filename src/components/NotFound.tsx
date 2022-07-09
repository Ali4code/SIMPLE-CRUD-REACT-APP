import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, FC } from "react";

const NotFound: FC<any> = (): ReactElement => {
  return (
    <Box sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Typography variant="h1">404 - Not Found!</Typography>
</Box>
  );
};

export default NotFound;
