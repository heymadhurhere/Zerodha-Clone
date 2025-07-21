import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../home/Hero";

// Test Suite for Hero Component
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveClass("mb-5");
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("heading", { name: /Invest in your future/i });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("mt-5");
  });
});
