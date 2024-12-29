import React from 'react';
import { render } from '../../utils/tests/testUtils';
import { TOAST } from '../../utils/tests/testIDs';
import Toast from '../Toast';
import { View } from 'react-native-web';

it('Should render the toast if visible prop is true', () => {
  const { queryByText, queryByTestId } = render(
    <Toast
      visible
      text="ceci est un test"
      icon={<View style={{ height: 10, width: 10 }} />}
    />
  );

  // Should render the ElevatedView
  expect(queryByTestId(TOAST)).not.toBeNull();

  // Should display the text
  expect(queryByText('ceci est un test')).not.toBeNull();
});

it('Should not render the toast', () => {
  const { queryByTestId, queryByText } = render(
    <Toast
      text="ceci est un test"
      visible={false}
      icon={<View style={{ height: 10, width: 10 }} />}
    />
  );

  expect(queryByTestId(TOAST)).toBeNull();

  // Should not display the text
  expect(queryByText('ceci est un test')).toBeNull();
});
