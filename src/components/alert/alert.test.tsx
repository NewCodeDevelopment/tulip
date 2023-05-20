import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Alert } from "./alert";

describe("Running Test for Alert", () => {
  /**
   * Test to check if the Alert is rendered
   */
  test("Render Alert", () => {
    render(<Alert />);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
  });
});
