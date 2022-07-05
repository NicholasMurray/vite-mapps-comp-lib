import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Header } from './Header';
import {
  defaultHeaderData,
  serviceNameHeaderData,
  serviceNameUsernameSignoutHeaderData,
  serviceNameAndNavigationHeaderData 
} from './test-data/';

expect.extend(toHaveNoViolations);

describe('Header Component', () => {
  it('should render default header', () => {
    render(
      <Header {...defaultHeaderData}></Header>
    );
    expect(screen.getByText('Home Office')).toBeTruthy();
  });

  it('should render service name', () => {
    render(
      <Header {...serviceNameHeaderData}></Header>
    );
    expect(screen.getByText('Service name')).toBeTruthy();
  });
  
  it('should render user name, sign out text and signout link', () => {
    render(
      <Header {...serviceNameUsernameSignoutHeaderData}></Header>
    );
    expect(screen.getByText('User name')).toBeTruthy();
    expect(screen.getByText('Sign out')).toBeTruthy();
    expect(screen.getByText('Sign out').closest('a')).toHaveAttribute('href', '#');
  });

  it('should render service name and navigation with appropriate active navigation item', () => {
    render(
      <Header {...serviceNameAndNavigationHeaderData}></Header>
    );
    expect(screen.getByText('Service name')).toBeTruthy();
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('Navigation item 1');
    expect(screen.getAllByRole('listitem')[2]).toHaveClass('hods-header__navigation-item--active');
    expect(screen.getAllByRole('link')[3]).toHaveTextContent('Navigation item 2');
    expect(screen.getAllByRole('listitem')[4]).not.toHaveClass('hods-header__navigation-item--active');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Header {...defaultHeaderData}></Header>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
