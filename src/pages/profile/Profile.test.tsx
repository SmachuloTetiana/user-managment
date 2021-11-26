import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ProfilePage from './Profile';
import store from '../../store';

describe("render component", () => {
  test("renders App component", () => {
    const wrapper = shallow(<Provider store={store}><ProfilePage /></Provider>);

    expect(wrapper).toMatchSnapshot();
  })
})