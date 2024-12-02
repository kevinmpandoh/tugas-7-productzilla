import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

describe("Button Component", () => {
  const mockOnClick = jest.fn();
  const defaultProps = {
    title: "Click me",
    onClick: mockOnClick,
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders with the correct tittle", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
