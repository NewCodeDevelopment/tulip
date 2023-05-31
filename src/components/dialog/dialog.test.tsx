import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("Running Test for Dialog", () => {
  /**
   * Test to check if the Dialog is rendered
   */
  test("Render Dialog", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );

    // expect(screen.getByTestId("dialog-portal")).toBeInTheDocument();
    // expect(screen.getByTestId("dialog-overlay")).toBeInTheDocument();
    // expect(screen.getByTestId("dialog-content")).toBeInTheDocument();
    // expect(screen.getByTestId("dialog-header")).toBeInTheDocument();
    // expect(screen.getByTestId("dialog-footer")).toBeInTheDocument();
    // expect(screen.getByTestId("dialog-title")).toBeInTheDocument();
    // expect(screen.getByTestId("dialog-description")).toBeInTheDocument();
  });
});
