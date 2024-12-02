import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Contact from "../pages/Contact";

describe("Contact Component", () => {
  it("renders the contact section with correct elements", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    expect(screen.getByText(/Hubungi Saya/i)).toBeInTheDocument();

    const sendButton = screen.getByRole("button", {
      name: /Kirim Pesan/i,
    });
    expect(sendButton).toBeInTheDocument();
  });

  it("contains a link to send an email", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const sendButton = screen.getByRole("button", {
      name: /Kirim Pesan/i,
    });
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveAttribute("type", "submit");
  });
});
