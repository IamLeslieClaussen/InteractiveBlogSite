import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Image from "../Image";

describe("Image Component", () => {
  it("renders image with correct props", () => {
    render(
      <Image
        src="test-image.png"
        alt="Test Image"
        w={100}
        h={100}
        className="test-class"
      />
    );

    const img = screen.getByRole("img");

    // Check if image has correct attributes
    expect(img).toHaveAttribute("alt", "Test Image");
    expect(img).toHaveAttribute("width", "100");
    expect(img).toHaveAttribute("height", "100");
    expect(img).toHaveClass("test-class");
  });

  it("constructs ImageKit URL correctly", () => {
    render(<Image src="logo.png" alt="Logo" />);

    const img = screen.getByRole("img");
    // Test that it includes the ImageKit URL structure
    expect(img.getAttribute("src")).toContain("ik.imagekit.io");
    expect(img.getAttribute("src")).toContain("logo.png");
  });

  it("has lazy loading enabled", () => {
    render(<Image src="test.png" alt="Test" />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("loading", "lazy");
  });
});
