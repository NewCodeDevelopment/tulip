import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Running Test for  Badge", () => {
  /**
   * Test to check if the Badge is rendered
   */
  test("Render Badge", () => {
    render(<Badge />);
    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });
});
