import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const CustomInputTitle = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    boxSizing: "border-box",
    height: 50,
    width: "100vw",
    maxWidth: "800px",
    paddingX: "10px"
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
  },
  "& :disabled": {
    background: theme.palette.grey[100],
    transition: ".5s",
  },
}));

export const CustomInputBody = styled(CustomInputTitle)(({ theme }) => ({
  "& .MuiInputBase-input": {
    height: 300,
  }
}));
