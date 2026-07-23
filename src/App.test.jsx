import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("SMMC portfolio", () => {
  it("renders the main portfolio sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Student Education & Data Support/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /How my experience fits the SMMC role/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /Evidence for the work SMMC needs/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: /^Media$/i }),
    ).toBeTruthy();
  });

  it("uses the correct resume and work links", () => {
    render(<App />);

    const resume = screen.getByRole("link", { name: /download resume/i });
    const brochure = screen.getByRole("link", {
      name: /download portfolio pdf/i,
    });
    const work = screen.getByRole("link", { name: /view my work/i });

    expect(resume.getAttribute("href")).toBe(
      "/smmc-portfolio/Sandeep_Satheesh_Resume.pdf",
    );
    expect(resume.hasAttribute("download")).toBe(true);
    expect(brochure.getAttribute("href")).toBe(
      "/smmc-portfolio/Sandeep_Satheesh_SMMC_Portfolio.pdf",
    );
    expect(brochure.hasAttribute("download")).toBe(true);
    expect(work.getAttribute("href")).toBe("#experience");
  });

  it("uses the supplied contact destinations", () => {
    render(<App />);

    const emailLinks = screen.getAllByRole("link", {
      name: /ss348@illinois\.edu|email me/i,
    });
    expect(
      emailLinks.every(
        (link) => link.getAttribute("href") === "mailto:ss348@illinois.edu",
      ),
    ).toBe(true);

    expect(
      screen
        .getByRole("link", { name: /^LinkedIn/i })
        .getAttribute("href"),
    ).toBe("https://www.linkedin.com/in/sandeepstele/");
  });

  it("provides descriptive alt text for every content image", () => {
    render(<App />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
    expect(images.every((image) => image.getAttribute("alt")?.trim())).toBe(
      true,
    );
  });
});
