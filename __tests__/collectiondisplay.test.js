import CollectionDisplay from "@/pages/collectiondisplay";
import { render } from "@testing-library/react";

test('Displays props of cardname from each index object in an array', () => {

    const { getByText } = render(<CollectionDisplay/>);
    const cardnameElement = getByText('card1');
    expect(cardnameElement).toBeInTheDocument();
    
})
    
test('Displays card image from each index object in an array', () => {
    
        const { getByAltText } = render(<CollectionDisplay/>);
        const cardimageElement = getByAltText('card1');
        expect(cardimageElement).toBeInTheDocument();
    })
