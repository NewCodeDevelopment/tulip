import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./checkbox";

describe("Running Test for Checkbox", () => {
  /**
   * Test to check if the Checkbox is rendered
   */
  test("Render Checkbox", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
