import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

describe("render component", () => {
  test("renders App component", () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);

    expect(wrapper).toMatchSnapshot();
  })
})
