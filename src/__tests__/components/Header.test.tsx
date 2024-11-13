import React, { screen } from '@testing-library/react';

import { renderWithProvider } from '../__utils__/renderWithProvider';

import { Header } from '../../components/Header';

test('renders the header component', () => {
    renderWithProvider(<Header />);
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
});

test('renders the menu button', () => {
    renderWithProvider(<Header />);
    const menuButtonComponent = screen.getByTestId('menu__button');
    expect(menuButtonComponent).toBeInTheDocument();
});

test('renders the menu', () => {
    renderWithProvider(<Header />);
    const menuComponent = screen.getByTestId('menu');
    expect(menuComponent).toBeInTheDocument();
});
