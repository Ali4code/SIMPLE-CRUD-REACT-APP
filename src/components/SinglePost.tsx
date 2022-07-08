import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { IApiSingleData } from "../hooks/useApi";



export default function SinglePost({ title, body , id }: IApiSingleData) {

  const navigate = useNavigate()

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} padding={2} >
    <StyledCard onClick={()=> navigate(`/details/${id}`)}>
      <Typography variant="h6" component="h4" fontWeight="700">
        {title}
      </Typography>
      <Typography variant="body2" component="h4">
       {body}
      </Typography>
    </StyledCard>
    </Grid>
  );
}

export const StyledCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  gap: "5px",
  alignItems:"center",
  background: "#FCFCFC",
  boxShadow: "0px 14px 40px #00000014",
  opacity: "1",
  borderRadius: "10px",
  padding: "20px",
  cursor: "pointer",
}));
