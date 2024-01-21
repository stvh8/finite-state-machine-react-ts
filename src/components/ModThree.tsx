import {
  Box,
  Grid,
  Link,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import {
  FC,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

import { modThree } from "@/utils/Mod";

// delay of user input in milliseconds
const debounceInputDelay = 500;

/**
 * @description renders italic grey text
 */
const TypographyFunction = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  };
});

/**
 * @description ModThree component
 * @returns - the component
 */
export const ModThree: FC = () => {
  const [
    inputValue,
    setInputValue,
  ] = useState<string>("");

  const [
    debouncedInputValue,
  ] = useDebounce(inputValue, debounceInputDelay);

  /**
   * @description input value on change handler
   * @param event - the handled change event
   */
  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = event;
    setInputValue(value);
  };

  return (
    <Box data-testid="mod-three">
      <Box sx={{ pb: 4 }}>
        <Link
          href="https://docs.google.com/document/d/1_mG9v86J3kzkWtU5RdxaHW64RWVOtzZ5M-JMcTiG86k/edit"
          target="_blank"
        >
          <Typography variant="h6">Problem definition document</Typography>
        </Link>
      </Box>

      <Box sx={{ pb: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold" }}
        >
          Example Implementation
        </Typography>
        <Typography variant="h6">Modulus three function implemented using finite state machine</Typography>
      </Box>

      <Box sx={{ px: 4 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <TypographyFunction variant="h5">{"modThree("}</TypographyFunction>
          </Grid>

          <Grid
            item
            md={4}
          >
            <TextField
              onChange={inputOnChangeHandler}
              value={inputValue}
              data-testid="mod-three-input"
              placeholder="binary number"
            />
          </Grid>

          <Grid item>
            <TypographyFunction variant="h5">{")"}</TypographyFunction>
          </Grid>

          <Grid item>
            <TypographyFunction variant="h5">{"=>"}</TypographyFunction>
          </Grid>

          <Grid item>
            <TypographyFunction
              variant="h5"
              data-testid="mod-three-result"
            >
              {modThree(debouncedInputValue)}
            </TypographyFunction>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
