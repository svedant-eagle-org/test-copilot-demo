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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Houston" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Music:")).toBeInTheDocument();
  });
});

describe("Tabs Profile Port field", () => {
  test("shows port dropdown with expected options and no default selection", () => {
    render(<Tabs />);

    const portSelect = screen.getByLabelText("Port:");
    expect(portSelect.value).toBe("");
    expect(screen.getByRole("option", { name: "Houston" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Pune" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Shanghai" })).toBeInTheDocument();
  });

  test("requires port selection before moving to next tab", () => {
    render(<Tabs />);

    fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText("Age:"), { target: { value: "30" } });
    fireEvent.change(screen.getByLabelText("Email Id:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Address:"), {
      target: { value: "Street 1" },
    });
    fireEvent.change(screen.getByLabelText("Language:"), {
      target: { value: "English" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Port should be selected")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.queryByText("Music:")).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Music:")).toBeInTheDocument();
  });
});

describe("Tabs clear button", () => {
  test("clears profile fields and validation errors", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Name is not Valid")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText("Age:"), { target: { value: "30" } });
    fireEvent.change(screen.getByLabelText("Email Id:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Address:"), {
      target: { value: "Street 1" },
    });
    fireEvent.change(screen.getByLabelText("Language:"), {
      target: { value: "English" },
    });
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(screen.getByLabelText("Name:").value).toBe("");
    expect(screen.getByLabelText("Age:").value).toBe("");
    expect(screen.getByLabelText("Email Id:").value).toBe("");
    expect(screen.getByLabelText("Address:").value).toBe("");
    expect(screen.getByLabelText("Language:").value).toBe("");
    expect(screen.getByLabelText("Port:").value).toBe("");
    expect(screen.queryByText("Name is not Valid")).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText("Age:"), { target: { value: "30" } });
    fireEvent.change(screen.getByLabelText("Email Id:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Address:"), {
      target: { value: "Street 1" },
    });
    fireEvent.change(screen.getByLabelText("Language:"), {
      target: { value: "English" },
    });
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((checkbox) => expect(checkbox.checked).toBe(false));

    fireEvent.click(checkboxes[0]);
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    const radios = screen.getAllByRole("radio");
    radios.forEach((radio) => expect(radio.checked).toBe(false));
  });
});
