import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import Details from '../../screens/Details';
import { fireEvent, render } from '../../utils/tests/testUtils';
import {
  BUTTON,
  CARD,
  DETAILS_SCREEN,
  DETAILS_SCREEN_IMAGE,
  HOME_SCREEN,
} from '../../utils/tests/testIDs';
import { recepies } from '../../data/recepies';
import { queryByText } from '@testing-library/react';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};


it('Should navigate to the details screen when the user clicks on a card', () => {
  const { queryByTestId, queryAllByTestId, queryByText } = render(
    <Navigator />
  );

  // Should display home screen
  expect(queryByTestId(HOME_SCREEN)).not.toBeNull();

  const cards = queryAllByTestId(CARD);

  // Should display the cards
  expect(cards.length).toBe(recepies.recepies.length);
  recepies.recepies.forEach((item) =>
    expect(queryByText(item.title)).not.toBeNull()
  );

  // Press on the first card
  fireEvent.press(cards[0]);

  // Should display the details screen
  expect(queryByTestId(HOME_SCREEN)).toBeNull();
  const detailsScreen = queryByTestId(DETAILS_SCREEN);
  expect(detailsScreen).not.toBeNull();
  expect(queryByTestId(DETAILS_SCREEN_IMAGE)).not.toBeNull();
  expect(queryByText(`#${recepies.recepies[0].category}`)).not.toBeNull();
  expect(queryByText(recepies.recepies[0].title)).not.toBeNull();
  expect(queryByText(recepies.recepies[0].description)).not.toBeNull();

  // press on the add to favorite button
  const addToFavoriteButton = queryByTestId(BUTTON);
  expect(addToFavoriteButton).not.toBeNull();
  fireEvent.press(addToFavoriteButton);
  expect(addToFavoriteButton).toHaveStyle({ backgroundColor: 'red' });
});
