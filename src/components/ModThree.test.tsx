import {
  describe,
  expect,
  test,
} from "vitest";

import { ModThree } from "./ModThree";

import {
  render,
  screen,
  userEvent,
  waitFor,
} from "test/rtlHelpers";

describe("<ModThree>", () => {
  test("Should render", () => {
    render(<ModThree />);

    expect(screen.getByTestId("mod-three")).toBeInTheDocument();
  });

  test("Should calculate a result", async () => {
    render(<ModThree />);

    const textInput = screen.getByPlaceholderText("binary number");
    expect(textInput).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(textInput, "1101");

    await waitFor(() => {
      expect(screen.getByTestId("mod-three-result")).toHaveTextContent("1");
    });
  });
});
