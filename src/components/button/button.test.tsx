import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Running Test for Button", () => {
  /**
   * Test to check if the button is rendered
   */
  test("Render Button", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
