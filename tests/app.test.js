import { shallow } from 'enzyme';
import App from '../src/components/App.js';
import React from 'react';

describe('<App />', () => {
    it('should render without crashing', () => {
        let component = shallow(React.createElement(App));
        let inst = component.instance();
        expect(component.length).toEqual(1);
    });
});