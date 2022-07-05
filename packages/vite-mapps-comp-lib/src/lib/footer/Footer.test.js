import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Footer } from './Footer';
import { 
  footerNavigationData
} from './test-data/';

expect.extend(toHaveNoViolations);

describe('Footer Component', () => {
  it('should render default Footer', () => {
    render(
      <Footer>Inner content</Footer>
    );
    expect(screen.getByText('Inner content')).toBeTruthy();
  });

  it('should render service name and navigation with appropriate active navigation item', () => {
    render(
      <Footer {...footerNavigationData}>
        Inner content
      </Footer>
    );
    expect(screen.getByText('Inner content')).toBeTruthy();
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Feedback');
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Feedback');
    expect(screen.getAllByRole('listitem')[0]).toHaveClass('active');
    expect(screen.getAllByRole('listitem')[1]).not.toHaveClass('hods-Footer__navigation-item--active');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Footer {...footerNavigationData}></Footer>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
