import React, { render, screen } from '@testing-library/react';

import { Resume } from '../../sections/Resume';

test('renders the projects section', () => {
    render(<Resume />);
    const resumeComponent = screen.getByTestId('resume');
    expect(resumeComponent).toBeInTheDocument();
});

test('renders the image', () => {
    render(<Resume />);
    const imgComponent = screen.getByRole('img');
    expect(imgComponent).toBeInTheDocument();
});
