import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { APIClientProvider } from '../../hooks/APIClientProvider';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(
      <APIClientProvider>
        <App />
      </APIClientProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
