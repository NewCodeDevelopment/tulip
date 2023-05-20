import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

describe("Running Test for Card", () => {
  /**
   * Test to check if the Card is rendered
   */
  test("Render Card", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>,
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-header")).toBeInTheDocument();
    expect(screen.getByTestId("card-title")).toBeInTheDocument();
    expect(screen.getByTestId("card-description")).toBeInTheDocument();
    expect(screen.getByTestId("card-content")).toBeInTheDocument();
    expect(screen.getByTestId("card-footer")).toBeInTheDocument();
  });
});
