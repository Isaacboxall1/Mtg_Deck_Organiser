import CollectionDisplay from "@/pages/collectiondisplay";
import { render } from "@testing-library/react";

test('Displays props of cardname from each index object in an array', () => {
    const cardArray = ['card1', 'card2', 'card3'];
    const { getByText } = render(<CollectionDisplay cardArray={cardArray} />);
    const cardnameElement = getByText(cardArray[0]);
    expect(cardnameElement).toBeInTheDocument();
})
    