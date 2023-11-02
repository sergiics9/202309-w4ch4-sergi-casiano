import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Action } from './action';

describe('Given Action component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Action></Action>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByText('Hang');
      expect(element).toBeInTheDocument();
    });
  });
});
