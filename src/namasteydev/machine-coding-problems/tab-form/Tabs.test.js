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
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Mid" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Full-time" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
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
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Senior" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Contract" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Music:")).toBeInTheDocument();
  });
});

describe("Tabs Profile Profession/Bio fields", () => {
  test("shows profession/bio section with job title, company and about me fields", () => {
    render(<Tabs />);

    expect(screen.getByText("Profession/Bio")).toBeInTheDocument();
    expect(screen.getByLabelText("Job Title:")).toBeInTheDocument();
    expect(screen.getByLabelText("Company:")).toBeInTheDocument();
    expect(screen.getByLabelText("About Me:")).toBeInTheDocument();
  });

  test("requires profession/bio fields before moving to next tab", () => {
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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Job Title cannot be empty")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Company cannot be empty")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("About Me cannot be empty")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Mid" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Full-time" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Music:")).toBeInTheDocument();
  });
});

describe("Tabs Profile Employment Summary section", () => {
  test("shows employment summary section with heading and all three fields", () => {
    render(<Tabs />);

    expect(screen.getByText("Employment Summary")).toBeInTheDocument();
    expect(screen.getByLabelText("Experience level:")).toBeInTheDocument();
    expect(screen.getByLabelText("Employment type:")).toBeInTheDocument();
    expect(screen.getByLabelText("Career goals:")).toBeInTheDocument();
  });

  test("shows experience level dropdown with expected options and no default selection", () => {
    render(<Tabs />);

    const experienceLevelSelect = screen.getByLabelText("Experience level:");
    expect(experienceLevelSelect.value).toBe("");
    expect(screen.getByRole("option", { name: "Fresher" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Mid" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Senior" })).toBeInTheDocument();
  });

  test("shows employment type dropdown with expected options and no default selection", () => {
    render(<Tabs />);

    const employmentTypeSelect = screen.getByLabelText("Employment type:");
    expect(employmentTypeSelect.value).toBe("");
    expect(screen.getByRole("option", { name: "Full-time" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Contract" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Intern" })).toBeInTheDocument();
  });

  test("requires experience level selection before moving to next tab", () => {
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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Experience level should be selected")).toBeInTheDocument();
    expect(screen.queryByText("Music:")).not.toBeInTheDocument();
  });

  test("requires employment type selection before moving to next tab", () => {
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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Fresher" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Employment type should be selected")).toBeInTheDocument();
    expect(screen.queryByText("Music:")).not.toBeInTheDocument();
  });

  test("requires career goals to be filled before moving to next tab", () => {
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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Senior" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Full-time" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Career goals cannot be empty")).toBeInTheDocument();
    expect(screen.queryByText("Music:")).not.toBeInTheDocument();
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
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Mid" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Full-time" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
    });

    fireEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(screen.getByLabelText("Name:").value).toBe("");
    expect(screen.getByLabelText("Age:").value).toBe("");
    expect(screen.getByLabelText("Email Id:").value).toBe("");
    expect(screen.getByLabelText("Address:").value).toBe("");
    expect(screen.getByLabelText("Language:").value).toBe("");
    expect(screen.getByLabelText("Port:").value).toBe("");
    expect(screen.getByLabelText("Job Title:").value).toBe("");
    expect(screen.getByLabelText("Company:").value).toBe("");
    expect(screen.getByLabelText("About Me:").value).toBe("");
    expect(screen.getByLabelText("Experience level:").value).toBe("");
    expect(screen.getByLabelText("Employment type:").value).toBe("");
    expect(screen.getByLabelText("Career goals:").value).toBe("");
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
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Senior" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Contract" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
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

describe("Tabs Interest AI checkbox", () => {
  test("shows AI checkbox above Java and satisfies interest validation", () => {
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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Mid" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Full-time" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    const checkboxes = screen.getAllByRole("checkbox");
    // Order: Music(0), Driving(1), AI(2), Java(3), JavaScript(4)
    expect(checkboxes).toHaveLength(5);

    const labels = screen.getAllByText(/^(Music|Driving|AI|Java|JavaScript):$/);
    const aiIndex = labels.findIndex((l) => l.textContent === "AI:");
    const javaIndex = labels.findIndex((l) => l.textContent === "Java:");
    expect(aiIndex).toBeLessThan(javaIndex);

    // Selecting only AI satisfies the interest validation
    fireEvent.click(checkboxes[2]);
    expect(checkboxes[2].checked).toBe(true);

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.queryByText("Select any interests")).not.toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
  });
});

describe("Tabs Interest Java checkbox", () => {
  test("shows Java checkbox above JavaScript and keeps interest validation behavior", () => {
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
    fireEvent.change(screen.getByLabelText("Port:"), {
      target: { value: "Pune" },
    });
    fireEvent.change(screen.getByLabelText("Job Title:"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company:"), {
      target: { value: "ABS" },
    });
    fireEvent.change(screen.getByLabelText("About Me:"), {
      target: {
        value:
          "I love building products and collaborating with teams to deliver reliable software for users.",
      },
    });
    fireEvent.change(screen.getByLabelText("Experience level:"), {
      target: { value: "Senior" },
    });
    fireEvent.change(screen.getByLabelText("Employment type:"), {
      target: { value: "Contract" },
    });
    fireEvent.change(screen.getByLabelText("Career goals:"), {
      target: { value: "I want to grow as a software engineer and lead impactful projects." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("AI:")).toBeInTheDocument();
    expect(screen.getByText("Java:")).toBeInTheDocument();
    expect(screen.getByText("JavaScript:")).toBeInTheDocument();
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(5);

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Select any interests")).toBeInTheDocument();

    fireEvent.click(checkboxes[2]);
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Dark")).toBeInTheDocument();
  });
});
