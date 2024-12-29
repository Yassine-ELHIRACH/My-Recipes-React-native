import React from 'react';
import { fireEvent, render } from '../../utils/tests/testUtils';

import ElevatedBadge from '../Badge';
import { Ionicons } from '@expo/vector-icons';
import { BADGE } from '../../utils/tests/testIDs';

it('should render the badge', () => {
  const onPressMock = jest.fn();
  const { queryByTestId, queryByText } = render(
    <ElevatedBadge
      title="test badge"
      onPress={onPressMock}
      textStyle={{ color: 'red' }}
      icon={() => (
        <Ionicons
          name="heart"
          size={26}
          color={'#d9d9d9'}
          onPress={() => onHeartPress()}
        />
      )}
    />
  );
  
  // Should display the badge
  const badge = queryByTestId(BADGE);
  expect(badge).not.toBeNull()

  // Should call the onPress mock
  fireEvent.press(badge);
  expect(onPressMock).toHaveBeenCalledTimes(1)

  // Should display the title
  expect(queryByText("test badge")).not.toBeNull()
});
