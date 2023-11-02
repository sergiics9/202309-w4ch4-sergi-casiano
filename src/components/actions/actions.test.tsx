import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Actions } from './actions';

describe('Given Actions component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Actions></Actions>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('actions');
      expect(element).toBeInTheDocument();
    });
  });
});
