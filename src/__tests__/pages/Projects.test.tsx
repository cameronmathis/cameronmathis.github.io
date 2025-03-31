import React, { render, screen } from '@testing-library/react';

import { Projects } from '../../sections/Projects';

test('renders the projects section', () => {
    render(<Projects />);
    const projectsComponent = screen.getByTestId('projects');
    expect(projectsComponent).toBeInTheDocument();
});
