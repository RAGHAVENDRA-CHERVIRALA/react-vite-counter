import { createRoot } from "react-dom/client";
import { vi, it, expect } from "vitest";

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

it("renders App component correctly", async () => {
  const rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);

  const mockedCreateRoot = createRoot;

  // Import the main entry file to execute the rendering logic
  await import("./main"); // Assuming your entry file is named 'main.js'
  expect(mockedCreateRoot).toHaveBeenCalledWith(rootElement);
});
