import { makeStyles } from "@mui/material";

export const useStyles = makeStyles({
  root: {
      '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
          outline: 'none',
      },
  }
});