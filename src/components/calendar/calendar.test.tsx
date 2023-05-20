import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Calendar } from "./calendar";

describe("Running Test for Calendar", () => {
  /**
   * Test to check if the Calendar is rendered
   */
  test("Render Calendar", () => {
    render(<Calendar />);

    expect(screen.getByTestId("calendar")).toBeInTheDocument();
  });
});
