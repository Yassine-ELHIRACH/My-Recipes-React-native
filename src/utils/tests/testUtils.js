import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import {render} from '@testing-library/react-native'

import RecepiesProvider from '../../providers/RecepiesProvider';
import { recepies as recepiesProvider } from '../../data/recepies';

const Providers = ({ children }) => {
  const value = {
    recepies: recepiesProvider.recepies,
    setRecepies: () => void 0,
    favorites: [],
    setFavorites: () => void 0,
    myRecepies: [],
    setMyRecepies: () => void 0,
  };
  return (
    <NavigationContainer>
      <Provider>
        <RecepiesProvider recepies={value}>{children}</RecepiesProvider>
      </Provider>
    </NavigationContainer>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
// override render method
export { customRender as render };
