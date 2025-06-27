import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "@/BrightFrame/ThemeContext";

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.removeAttribute("data-theme");
  });

  it("provides default theme and toggles correctly", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId("theme");
    const toggleButton = screen.getByText(/toggle theme/i);

    expect(themeDisplay.textContent).toBe("light");
    expect(document.body.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");

    fireEvent.click(toggleButton);

    expect(themeDisplay.textContent).toBe("dark");
    expect(document.body.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("uses stored theme from localStorage", () => {
    localStorage.setItem("theme", "dark");

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId("theme");

    expect(themeDisplay.textContent).toBe("dark");
    expect(document.body.getAttribute("data-theme")).toBe("dark");
  });
});
