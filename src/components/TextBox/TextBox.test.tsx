import React from "react";
import { render } from "@testing-library/react";

import TextBox from "./TextBox";

describe("TextBox", () => {
  test("renders TextBox component", () => {
    render(<TextBox text="Testing" />);
  });
});
