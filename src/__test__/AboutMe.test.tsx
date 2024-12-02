import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import AboutMe from "../pages/About";

describe("AboutMe Component", () => {
  it("renders the about me section with correct elements", () => {
    render(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    expect(screen.getByText(/Tentang Saya/i)).toBeInTheDocument();
    expect(screen.getByText(/Perkenalan Saya/i)).toBeInTheDocument();
    expect(screen.getByAltText(/My Photo/i)).toBeInTheDocument();
  });

  it("contains a link to download the CV", () => {
    render(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    const cvLink = screen.getByRole("link", {
      name: /Unduh CV/i,
    });
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveAttribute("href", "assets/cv/CV_Kevin.pdf");
  });

  it("displays the correct image with alt text", () => {
    render(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    const imgElement = screen.getByAltText(/My Photo/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/about.jpg");
  });
});
