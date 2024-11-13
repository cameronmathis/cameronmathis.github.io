import React, { render, screen } from '@testing-library/react';

import { Project } from '../../components/Project';

test('renders the anchor component', () => {
    render(<Project link='' image='' />);
    const anchorComponent = screen.getByTestId('project__item');
    expect(anchorComponent).toBeInTheDocument();
});

test('renders the project image', () => {
    render(<Project link='' image='' />);
    const projectImg = screen.getByRole('img');
    expect(projectImg).toBeInTheDocument();
});
