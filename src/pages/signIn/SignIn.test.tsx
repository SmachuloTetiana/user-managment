import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import SignInPage from './SignIn';
import store from '../../store';

describe("signIn component", () => {
    test("should render SignIn component", () => {  
        const component = shallow(<Provider store={store}><SignInPage /></Provider>);

        expect(component).toMatchSnapshot();
    });
})