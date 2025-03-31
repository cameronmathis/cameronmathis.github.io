import React, { screen } from '@testing-library/react';

import { renderWithProvider } from '../__utils__/renderWithProvider';

import { Menu } from '../../components/Menu';

test('renders all three links in the menu', () => {
    renderWithProvider(
        <Menu className='' open={false} setOpen={() => {}} id='' />
    );
    const linksArray = screen.getAllByRole('link', { hidden: true });
    expect(linksArray).toHaveLength(3);
});

test('renders about text in the menu', () => {
    renderWithProvider(
        <Menu className='' open={false} setOpen={() => {}} id='' />
    );
    const aboutText = screen.getByText('About');
    expect(aboutText).toBeInTheDocument();
});

test('renders resume text in the menu', () => {
    renderWithProvider(
        <Menu className='' open={false} setOpen={() => {}} id='' />
    );
    const resumeText = screen.getByText('Resume');
    expect(resumeText).toBeInTheDocument();
});

test('renders projects text in the menu', () => {
    renderWithProvider(
        <Menu className='' open={false} setOpen={() => {}} id='' />
    );
    const projectsText = screen.getByText('Projects');
    expect(projectsText).toBeInTheDocument();
});
