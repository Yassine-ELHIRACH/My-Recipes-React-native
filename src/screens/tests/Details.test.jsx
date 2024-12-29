import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Details from "../Details";
import { recepies } from "../../data/recepies";
import { fireEvent, render } from "../../utils/tests/testUtils";
import { BUTTON, DETAILS_SCREEN, DETAILS_SCREEN_IMAGE } from "../../utils/tests/testIDs";




const Stack = createStackNavigator()


const Component = () => {
    return <Stack.Navigator >
        <Stack.Screen name="Details" component={Details} initialParams={{ recepie: recepies.recepies[0] }} />
    </Stack.Navigator>
}

describe('Details screen component tests', () => {
    it("Should render the details screen", () => {
        const { queryByText, queryByTestId } = render(<Component />)


        expect(queryByTestId(DETAILS_SCREEN)).not.toBeNull()
        expect(queryByTestId(DETAILS_SCREEN_IMAGE)).not.toBeNull();

        expect(queryByText(recepies.recepies[0].title)).not.toBeNull();
        expect(queryByText(recepies.recepies[0].description)).not.toBeNull();
        expect(queryByText("#" + recepies.recepies[0].category)).not.toBeNull();

        // Should display the button with the possibility to add to favorite
        const button = queryByTestId(BUTTON)
        expect(queryByText("ADD TO FAVORITE")).not.toBeNull();
        expect(button).not.toBeNull();
        expect(button).toHaveStyle({ backgroundColor: "green" })

    })

    it("Should change the button color", () => {
        const { queryByText, queryByTestId } = render(<Component />)


        expect(queryByTestId(DETAILS_SCREEN)).not.toBeNull()
        expect(queryByTestId(DETAILS_SCREEN_IMAGE)).not.toBeNull();

        expect(queryByText(recepies.recepies[0].title)).not.toBeNull();
        expect(queryByText(recepies.recepies[0].description)).not.toBeNull();
        expect(queryByText("#" + recepies.recepies[0].category)).not.toBeNull();

        // Should display the button with the possibility to add to favorite
        const button = queryByTestId(BUTTON)
        expect(queryByText("ADD TO FAVORITE")).not.toBeNull();
        expect(button).not.toBeNull();
        expect(button).toHaveStyle({ backgroundColor: "green" })

        // Pressing the button
        fireEvent.press(button);
        expect(button).toHaveStyle({ backgroundColor: "red" })
        expect(queryByText("REMOVE FROM FAVORITE")).not.toBeNull();


         // Pressing the button agai
         fireEvent.press(button);
         expect(button).toHaveStyle({ backgroundColor: "green" })
         expect(queryByText("ADD TO FAVORITE")).not.toBeNull();



    })


})