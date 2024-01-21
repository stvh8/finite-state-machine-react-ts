import {
  describe,
  expect,
  test,
} from "vitest";

import { App } from "./App";

import {
  render,
  screen,
} from "test/rtlHelpers";

describe("<App>", () => {
  test("Should render", () => {
    render(<App />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
