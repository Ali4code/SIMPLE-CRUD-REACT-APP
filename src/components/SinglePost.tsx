import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface ISinglePostProps {
  title: string;
  body: string;
}

export default function SinglePost({ title, body }: ISinglePostProps) {
  return (
    <Grid item xs={5}>
    <StyledCard>
      <Typography variant="h6" component="h4">
        Title:
      </Typography>
      <Typography variant="h6" component="h4">
        {title}
      </Typography>
      <Typography variant="h6" component="h4">
        Body: {body}
      </Typography>
    </StyledCard>
    </Grid>
  );
}

export const StyledCard = styled("div")(({ theme }) => ({
  maxWidth: "400px",
  height: "150px",
  background: "#FCFCFC",
  boxShadow: "0px 14px 40px #00000014",
  opacity: "1",
  borderRadius: "10px",
}));
