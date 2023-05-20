import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from ".";

describe("Running Test for AlertDialog", () => {
  /**
   * Test to check if the AlertDialog is rendered
   */
  test("Render AlertDialog open", () => {
    render(
      <AlertDialog open>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );

    expect(screen.getByTestId("alert-dialog-content")).toBeInTheDocument();
    expect(screen.getByTestId("alert-dialog-header")).toBeInTheDocument();
    expect(screen.getByTestId("alert-dialog-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-dialog-description")).toBeInTheDocument();
    expect(screen.getByTestId("alert-dialog-footer")).toBeInTheDocument();
    expect(screen.getByTestId("alert-dialog-action")).toBeInTheDocument();
    expect(screen.getByTestId("alert-dialog-cancel")).toBeInTheDocument();
  });
});
