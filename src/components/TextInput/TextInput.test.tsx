import React from "react";
import { render } from "@testing-library/react";

import TextInput from "./TextInput";

describe("TextInput", () => {
  test("renders TextInput component", () => {
    render(<TextInput placeholder="Placeholder" defaultText="Default Text" />);
  });
});
