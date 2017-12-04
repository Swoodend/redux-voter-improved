import { shallow, mount } from 'enzyme';
import App from '../src/components/App.js';
import React from 'react';

describe('<App />', () => {
    let component = shallow(<App/>);    
    it('should render without crashing', () => {
        let inst = component.instance();
        expect(component.length).toEqual(1);
    });

    it('should render two child components', () => {
        expect(component.children().length).toEqual(2);
    });
});