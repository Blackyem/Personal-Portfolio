import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../../src/BrightFrame/ProjectCard';

describe('ProjectCard', () => {
  it('renders the image, heading, and paragraph correctly', () => {
    const mockProps = {
      src: 'https://example.com/image.png',
      link: 'https://example.com',
      h3: 'Example Project',
      p: 'This is a description of the example project.'
    };

    render(<ProjectCard {...mockProps} />);

    const image = screen.getByRole('img', { name: /example project logo/i });
    const heading = screen.getByRole('heading', { name: /example project/i });
    const paragraph = screen.getByText(/this is a description of the example project/i);
    const link = screen.getByRole('link');

    expect(image).toHaveAttribute('src', mockProps.src);
    expect(link).toHaveAttribute('href', mockProps.link);
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
