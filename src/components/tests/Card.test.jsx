import React from 'react';
import { render, fireEvent } from '../../utils/tests/testUtils';
import Card from '../Card';
import { CARD, CARD_ICON, CARD_IMAGE } from '../../utils/tests/testIDs';

// To show : basic tests + test the styles of a component
describe('Card component test', () => {
    it('Should render the card', async () => {
        const onCardPressMock = jest.fn();
        const { queryByTestId, queryByText, findByTestId } = render(
            <Card
                title="Card title"
                category="cake"
                image={require("../../../assets/cookie.jpg")}
                onCardPress={onCardPressMock}
                canLike={true}
            />)
        const card = queryByTestId(CARD)
        expect(card).not.toBeNull();

        // Should display the title
        expect(queryByText('Card title')).not.toBeNull();

        // Should display the category
        expect(queryByText('cake')).not.toBeNull();

        // Should display the image
        expect(queryByTestId(CARD_IMAGE)).not.toBeNull()

        // Should render the card heart icon
        const heartIcon = await findByTestId(CARD_ICON);
        expect(heartIcon).not.toBeNull();
        expect(heartIcon).toHaveStyle({ color: '#d9d9d9' })

        // Sould call the function when card is pressed
        fireEvent.press(card)
        expect(onCardPressMock).toHaveBeenCalledTimes(1)
    })
    it('Should change the icon color when icon is pressed', async () => {
        const { findByTestId } = render(
            <Card
                title="Card title"
                category="cake"
                image={require("../../../assets/cookie.jpg")}
                onCardPress={() => void 0}
                canLike={true}
            />)

        // Should render the card heart icon
        const heartIcon = await findByTestId(CARD_ICON);
        expect(heartIcon).not.toBeNull();
        expect(heartIcon).toHaveStyle({ color: '#d9d9d9' })

        // Pressing on the card icon
        fireEvent.press(heartIcon)

        // Icon should have a different color
        expect(heartIcon).toHaveStyle({ color: 'red' })

    })

    it('Should not display the heart icon', async () => {
        const { queryByTestId } = render(
            <Card
                title="Card title"
                category="cake"
                image={require("../../../assets/cookie.jpg")}
                onCardPress={() => void 0}
            />)

        expect(queryByTestId(CARD_ICON)).toBeNull();
    })

    it('Should display a red heart icon', async () => {
        const { queryByTestId, findByTestId } = render(
            <Card
                title="Card title"
                category="cake"
                image={require("../../../assets/cookie.jpg")}
                onCardPress={() => void 0}
                isFav
                canLike
            />)

        // Should render the card heart icon with red color
        const heartIcon = await findByTestId(CARD_ICON);
        expect(heartIcon).not.toBeNull();
        expect(heartIcon).toHaveStyle({ color: 'red' })

    })
})