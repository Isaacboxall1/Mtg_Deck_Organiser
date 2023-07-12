
import CardImageDisplay from "@/app/components/ImageDisplayGrid/CardImageDisplay";
import { render } from "@testing-library/react";

test('Displays props of cardname and quantity', () => {

    const { getByText } = render(<CardImageDisplay card={{name: 'card1', quantity: 4, img:'/example.jpg'}}/>);
    const cardquantityElement = getByText('x4');
    expect(cardquantityElement).toBeInTheDocument();

})
    
test('Displays card image from each index object in an array', () => {
        const { getByAltText } = render(<CardImageDisplay card={{name: 'card1', img:'/example.jpg'}}/>);
        const cardimageElement = getByAltText('card1');
        expect(cardimageElement).toBeInTheDocument();
    })

