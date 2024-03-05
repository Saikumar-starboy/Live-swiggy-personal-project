import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  // it and test is the same thing

  it("Should load contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should submit tect in the contact us component", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
  });

  test("Should load placeholder name in the contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load input name in the contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // Check each input element in the array
    // inputBoxes.forEach((inputBox) => {
    //   expect(inputBox).toBeInTheDocument();
    // }); (or)

    //inverse of below line "toBE"
    // expect(inputBoxes.length).not.toBe(3)

    expect(inputBoxes.length).toBe(2);
  });
});
