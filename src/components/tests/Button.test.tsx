import React from "react";
import Button from "../Button";
import { BUTTON } from "../../utils/tests/testIDs";
import { render, fireEvent } from "../../utils/tests/testUtils";
import { View } from "react-native";

describe('Button component tests', () => {

    it('Should display the button', () => {
        const onPressMock = jest.fn()
        const { queryByTestId, queryByText } = render(<Button
        style={{backgroundColor: 'white'}}
            title="Test"
            onPress={onPressMock} >
            <View />
        </Button>)

        const button = queryByTestId(BUTTON)
        expect(button).not.toBeNull()
        expect(queryByText("Test".toUpperCase())).not.toBeNull()

        // Pressing the button
        fireEvent.press(button)
        expect(onPressMock).toHaveBeenCalledTimes(1)

    })

    it("Should change the button's style when style props are passed", () => {
        const { queryByTestId, queryByText } = render(
            <Button title="Test"
                onPress={() => void 0}
                style={{ backgroundColor: 'red' }}
                textStyle={{ color: 'blue' }} >
                <View />
            </Button>)

        // Should diplay a button with a red background color
        const button = queryByTestId(BUTTON)
        expect(button).not.toBeNull()
        expect(button).toHaveStyle({ backgroundColor: 'red' })

        // Should display a blue text
        const buttonText = queryByText("Test".toUpperCase())
        expect(buttonText).not.toBeNull()
        expect(buttonText).toHaveStyle({ color: 'blue' })




    })

})