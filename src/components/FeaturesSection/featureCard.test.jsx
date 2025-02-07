import React from "react";
import { render, screen } from "@testing-library/react";
import icon6 from "../../assest/featuresIcon/B2B-ninja-Features-S6.png";
import "@testing-library/jest-dom";
import FeatureCard from "./FeatureCard";

const defaultProps = {
  title: "Support for Advanced Product Types",
  description:
    "Add multiple options and features to your products listed in B2B Ninja, so your customers get the right quote for the product they need.",
  icon: icon6,
};

describe("FeatureCard Component", () => {
  test("Should render title, description, and icon", () => {
    render(<FeatureCard {...defaultProps} />);
    const title = screen.getByText(defaultProps.title);
    const description = screen.getByText(defaultProps.description);
    const icon = screen.getByAltText(defaultProps.title);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", defaultProps.icon);
  });

  test("Should not render if any details is missing", () => {
    const props = {
      title: "Support for Advanced Product Types",
      description:
        "Add multiple options and features to your products listed in B2B Ninja, so your customers get the right quote for the product they need.",
    };
    render(<FeatureCard {...props} />);
    let testCard = screen.queryByTestId("feature-card");

    expect(testCard).not.toBeInTheDocument();
  });

  test("Should be placed as per UI", () => {
    render(<FeatureCard {...defaultProps} />);
    const testCard = screen.getByTestId("feature-card");
    const icon = screen.getByRole("img");
    const title = screen.getByText(defaultProps.title);
    const description = screen.getByText(defaultProps.description);

    expect(testCard).toHaveClass("flex flex-col items-start p-4 rounded");
    expect(icon).toHaveClass("w-12 h-12 mb-3");
    expect(title).toHaveClass("font-semibold mb-2");
    expect(description).toHaveClass("text-sm text-gray-600");

    // Check the order of elements
    expect(testCard).toContainElement(icon);
    expect(testCard).toContainElement(title);
    expect(testCard).toContainElement(description);

    const iconNextSibling = icon.nextElementSibling;
    const titleNextSibling = title.nextElementSibling;

    expect(iconNextSibling).toBe(title);
    expect(titleNextSibling).toBe(description);
  });
});
