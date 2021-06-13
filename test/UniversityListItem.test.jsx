import { render, screen } from '@testing-library/react';
import UniversityListItem from "../src/components/UniversityList/UniversityListItem";

test('renders learn react link', () => {
  render(<UniversityListItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});