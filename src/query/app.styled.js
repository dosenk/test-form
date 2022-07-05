import { styled } from "@mui/system";
import { Paper } from "@mui/material";

// eslint-disable-next-line import/prefer-default-export
export const MyPaper = styled(Paper)(({ theme }) =>
  // console.log(theme);
  ({
    backgroundColor: "#000",
  })
);
