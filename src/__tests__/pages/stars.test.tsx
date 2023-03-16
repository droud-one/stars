import React from 'react';
import { render } from '@testing-library/react';
import Stars from '../../pages/stars';

jest.mock('../../util/firebase', () => ({
    all: jest.fn(() => Promise.resolve([]))
}));

describe('STARs page', () => {
    it('should render', () => {
        const { getByTestId } = render(<Stars />);

        expect(getByTestId('stars-title')).toHaveTextContent('STARs:');
    });
});