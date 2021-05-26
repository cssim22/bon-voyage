import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/components/App.jsx';
// import App from '../client/components/App.jsx';

configure({ adapter: new Adapter() });

describe('React unit test', () => {
  describe('App unit test', () => {
    let wrapper;
     beforeAll(() => {
       wrapper = mount(<App />)
     })
  })
})