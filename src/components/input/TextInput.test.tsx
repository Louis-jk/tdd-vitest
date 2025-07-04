import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";

describe("render input element", () => {
  test("render input element", async () => {
    render(<TextInput />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("");
    expect(inputElement).toHaveAttribute("placeholder", "Enter your text");
  });

  test("input event should update the state", async () => {
    const user = userEvent.setup();

    render(<TextInput />);

    const inputElement = screen.getByRole("textbox");

    await user.type(inputElement, "Hello World");
    expect(inputElement).toHaveValue("Hello World");
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
