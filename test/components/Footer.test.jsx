import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../../src/components/Footer';

describe('<Footer />', () => {
  test('renders copyright text', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const linkElement = getByText(/Copyright C 2016 DEMO Streaming. All Right Reserved./i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders footer terms', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const terms = ['Home', 'Terms and Conditions', 'Privacy Policy', 'Collection Statement', 'Help', 'Manage Account'];
    
    terms.forEach(term => {
      const termElement = getByText(new RegExp(term, 'i'));
      expect(termElement).toBeInTheDocument();
    });
  });

  test('renders social media icons', () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const socialMediaIcons = container.querySelectorAll('.footer-social svg');
    expect(socialMediaIcons.length).toBe(3);
  });

  test('renders store icons', () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    const storeIcons = container.querySelectorAll('.footer-stores svg');
    expect(storeIcons.length).toBe(3);
  });
});
