import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

import { ModThree } from "@/components/ModThree";

/**
 * @description App component
 * @returns - the component
 */
export const App = () => {
  return (
    <Box
      sx={{ display: "flex" }}
      data-testid="app"
    >
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Finite State Machine Demo (React + TS + Vite)
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          px: 4,
          py: 10,
        }}
      >
        <ModThree />
      </Box>
    </Box>
  );
};
