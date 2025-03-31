import React, { screen } from '@testing-library/react';

import { renderWithProvider } from '../__utils__/renderWithProvider';

import { About } from '../../sections/About';

test('renders the heading component', () => {
    renderWithProvider(<About />);
    const headingComponent = screen.getByRole('heading');
    expect(headingComponent).toBeInTheDocument();
});

test('renders the job title', () => {
    renderWithProvider(<About />);
    const jobTitleComponent = screen.getByTestId('job__title');
    expect(jobTitleComponent).toBeInTheDocument();
});

test('renders the first paragraph', () => {
    renderWithProvider(<About />);
    const paragraphOneComponent = screen.getByTestId('paragraph__one');
    expect(paragraphOneComponent).toBeInTheDocument();
});

test('renders the second paragraph', () => {
    renderWithProvider(<About />);
    const paragraphTwoComponent = screen.getByTestId('paragraph__two');
    expect(paragraphTwoComponent).toBeInTheDocument();
});

test('renders the third paragraph', () => {
    renderWithProvider(<About />);
    const paragraphThreeComponent = screen.getByTestId('paragraph__three');
    expect(paragraphThreeComponent).toBeInTheDocument();
});

test('renders the image', () => {
    renderWithProvider(<About />);
    const imgComponent = screen.getByRole('img');
    expect(imgComponent).toBeInTheDocument();
});
