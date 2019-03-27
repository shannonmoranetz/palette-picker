import React from 'react';
import { shallow } from 'enzyme';
import { LoadingDisplay } from './LoadingDisplay';

describe('LoadingDisplay', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <LoadingDisplay/>
        )
    });

    describe('LoadingDisplay component', () => {
        it('should properly render the component elements', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});