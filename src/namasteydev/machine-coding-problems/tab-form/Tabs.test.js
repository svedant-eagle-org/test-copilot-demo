import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs Profile Language field", () => {
  test("shows language dropdown with expected options and no default selection", () => {
    render(<Tabs />);

    const languageSelect = screen.getByLabelText("Language:");
    expect(languageSelect.value).toBe("");
    expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Hindi" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "French" })).toBeInTheDocument();
  });

  test("requires language selection before moving to next tab", () => {
    render(<Tabs />);

    fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText("Age:"), { target: { value: "30" } });
    fireEvent.change(screen.getByLabelText("Email Id:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Address:"), {
      target: { value: "Street 1" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Language should be selected")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.queryByText("Music:")).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Language:"), {
      target: { value: "English" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Music:")).toBeInTheDocument();
  });
});
