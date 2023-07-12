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
})