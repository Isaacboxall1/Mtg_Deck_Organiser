
import CardDisplay from "@/globals/components/DisplayGrid/CardDisplay";
import { render } from "@testing-library/react";

test('Displays props of cardname and quantity', () => {

    const { getByText } = render(<CardDisplay card={{name: 'card1', quantity: 4}}/>);
    const cardnameElement = getByText('card1');
    const cardquantityElement = getByText('x 4');
    expect(cardnameElement).toBeInTheDocument();
    expect(cardquantityElement).toBeInTheDocument();

})
    
test('Displays card image from each index object in an array', () => {
        const { getByAltText } = render(<CardDisplay card={{name: 'card1'}}/>);
        const cardimageElement = getByAltText('card1');
        expect(cardimageElement).toBeInTheDocument();
    })
