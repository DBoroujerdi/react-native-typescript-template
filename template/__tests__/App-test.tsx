import 'react-native';
import React from 'react';
import App from '../App';

import {render, wait, fireEvent} from '@testing-library/react-native';

it('renders on the main screen tab', async () => {
  const {getByText} = render(<App />);

  await wait(() => {
    expect(getByText('Main Screen!')).toBeTruthy();
  });
});

it('renders the settings tab when navigated to', async () => {
  const {getByText} = render(<App />);

  const tabButton = getByText('Settings');

  fireEvent.press(tabButton);

  await wait(() => {
    expect(getByText('Settings Screen!')).toBeTruthy();
  });
});
