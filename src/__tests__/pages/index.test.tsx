import React from 'react';
import { render } from '@testing-library/react';
import Index from '../../pages';

describe('Index page', () => {
    it('should render', () => {
        const { getByTestId } = render(<Index />);

        expect(getByTestId('index-title')).toHaveTextContent('Go to STARs');
    });
});