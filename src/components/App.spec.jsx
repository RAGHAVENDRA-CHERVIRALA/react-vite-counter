import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import App from "./App";

describe("App Component", () => {
  const user = userEvent.setup();
  it("Should render App with initial count value as 0", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is 0");
  });

  it("Should render App with count value as 1 when clicks increment button", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is 1");
  });

  it("Should render App with count value as 10 when clicks increment by 10 button", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    const incrementButton = screen.getByRole("button", {
      name: "Increment by 10",
    });
    await user.click(incrementButton);
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is 10");
  });

  it("Should render App with count value as -1 when clicks decrement button", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(decrementButton);
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is -1");
  });

  it("Should render App with count value as -5 when clicks decrement by 5 button", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    const decrementButton = screen.getByRole("button", {
      name: "Decrement by 5",
    });
    await user.click(decrementButton);
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is -5");
  });

  it("Should render App with correct count value as user clicks multiple buttons", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    const incrementButton = screen.getByRole("button", {
      name: "Increment by 10",
    });
    await user.click(incrementButton);
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is 10");
    const decrementButton = screen.getByRole("button", {
      name: "Decrement by 5",
    });
    await user.click(decrementButton);
    expect(screen.getByText(/Count is/)).toHaveTextContent("Count is 5");
  });
});
