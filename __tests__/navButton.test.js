import NavButton from "@/app/components/globals/NavButton";
import { render } from "@testing-library/react";

describe('NavButton', () => {
    
    test('Displays text correctly for userCollection Location Prop', () => {
    const { getByText } = render(<NavButton location='userCollection'/>);
    const buttonText = getByText('Collection');
    expect(buttonText).toBeInTheDocument();
})

    test('Displays text correctly for home Location Prop', () => {
    const { getByText } = render(<NavButton location='home'/>);
    const buttonText = getByText('Home');
    expect(buttonText).toBeInTheDocument();
})

    test('Displays text correctly for addCardsToCollection Location Prop', () => {
    const { getByText } = render(<NavButton location='addCardsToCollection'/>);
    const buttonText = getByText('Add Cards To Collection');
    expect(buttonText).toBeInTheDocument();
})

    test('Displays text correctly for default Location Prop', () => {
    const { getByText } = render(<NavButton/>);
    const buttonText = getByText('Home');
    expect(buttonText).toBeInTheDocument();
})

    test('Displays image correctly for userCollection Location Prop', () => {
    const { getByAltText } = render(<NavButton location='userCollection'/>);
    const buttonImage = getByAltText('collection icon');
    expect(buttonImage).toBeInTheDocument();
    })

    test('Displays image correctly for home Location Prop', () => {
    const { getByAltText } = render(<NavButton location='home'/>);
    const buttonImage = getByAltText('home icon');
    expect(buttonImage).toBeInTheDocument();
    })

    test('Displays image correctly for addCardsToCollection Location Prop', () => {
    const { getByAltText } = render(<NavButton location='addCardsToCollection'/>);
    const buttonImage = getByAltText('add card icon');
    expect(buttonImage).toBeInTheDocument();
    })
})