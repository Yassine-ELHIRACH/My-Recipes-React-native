import { NavigationContainer } from "@react-navigation/native"
import { recepies } from "../../data/recepies"
import { CARD, CARD_ICON, CARD_IMAGE } from "../../utils/tests/testIDs"
import { render } from "../../utils/tests/testUtils"
import FavoritesRecepiesScreen from "../FavoritesRecepies"
import { render as nativeRender } from "@testing-library/react-native"
import { Provider } from "react-native-paper"
import RecepiesProvider from "../../providers/RecepiesProvider"
import { queryByTestId } from "@testing-library/react"

// To show: wrap component in appropriate provider to have the right testing environments
describe('FavoriteRecepies component tests', () => {
    it('Should not display the list if there is no favorite recepie', () => {
        const navigationMock = jest.fn()
        const { queryByText } = render(<FavoritesRecepiesScreen navigation={navigationMock} />)

        // Should display the empty list message
        expect(queryByText("No favorites recepie")).not.toBeNull()
    })
    it('Should display the list', () => {

        const Providers = ({ children }) => {
            const value = {
                recepies: recepies.recepies,
                setRecepies: () => void 0,
                favorites: recepies.recepies,
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

        const navigationMock = jest.fn()
        const { queryAllByTestId, queryByTestId, queryByText } = nativeRender(<FavoritesRecepiesScreen navigation={navigationMock} />, { wrapper: Providers })

        // Should display the cards
        expect(queryAllByTestId(CARD).length).toBe(recepies.recepies.length);
        expect(queryAllByTestId(CARD_ICON).length).toBe(0);
        expect(queryAllByTestId(CARD_IMAGE).length).toBe(recepies.recepies.length);
        recepies.recepies.forEach(card => {
            expect(queryByText(card.title)).not.toBeNull();
        })
    })
})