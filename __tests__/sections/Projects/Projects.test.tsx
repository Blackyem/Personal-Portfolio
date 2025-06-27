import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/sections/Projects/Projects";

vi.mock("@/sections/Projects/ProjectsStyles.module.css", () => ({
  default: {
    container: "mock-container",
    projectsContainer: "mock-projects-container",
  },
}));

vi.mock("./ProjectsStyles.module.css", () => ({
  default: {
    container: "mock-container",
    projectsContainer: "mock-projects-container",
  },
}));

vi.mock("@/BrightFrame/ProjectCard", () => ({
  default: ({
    src,
    link,
    h3,
    p,
  }: {
    src: string;
    link: string;
    h3: string;
    p: string;
  }) => (
    <div data-testid="project-card">
      <img src={src} alt={h3} />
      <a href={link}>Link</a>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  ),
}));

vi.mock("@/assets/LiveStream2.png", () => ({
  default: "mocked-livestream-path",
}));

vi.mock("@/assets/OnlineStore2.png", () => ({
  default: "mocked-onlinestore-path",
}));

describe("Projects Component", () => {
  it("renders the component with correct title", () => {
    render(<Projects />);
    const titleElement = screen.getByText("Projects");
    expect(titleElement).toBeDefined();
  });

  it("renders two ProjectCard components", () => {
    render(<Projects />);
    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards).toHaveLength(2);
  });

  it("renders the Viberr project with correct data", () => {
    render(<Projects />);
    const projectCards = screen.getAllByTestId("project-card");

    expect(projectCards[0].textContent).toContain("Viberr");
    expect(projectCards[0].textContent).toContain("Streaming App");
  });

  it("renders the Summer Sale project with correct data", () => {
    render(<Projects />);
    const projectCards = screen.getAllByTestId("project-card");

    expect(projectCards[1].textContent).toContain("Summer Sale");
    expect(projectCards[1].textContent).toContain(
      "...delivering the best products"
    );
  });
});
