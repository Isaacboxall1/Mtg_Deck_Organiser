import GroupToggle from "@/app/components/globals/GroupToggle";
import { render } from "@testing-library/react";

const mockProps = {
    sortCriteria: 'type',
    setSortCriteria: jest.fn()
}

describe('GroupToggle', () => {
    test('should render correctly', () => {
        const { container } = render(<GroupToggle />);
        expect(container).toMatchSnapshot();
    }
    )
    test('should render with props', () => {
        const { container } = render(<GroupToggle {...mockProps} />);
        expect(container).toMatchSnapshot();
    }
    )
   test('active class should be applied to button with matching sortCriteria', () => {
        const { getByText } = render(<GroupToggle {...mockProps} />);
        expect(getByText('Type').classList.contains('active')).toBe(true);
        expect(getByText('Color').classList.contains('inactive')).toBe(true);
        expect(getByText('Rarity').classList.contains('inactive')).toBe(true);
    }
    )
    test('setSortCriteria should be called when button is clicked', () => {
        const { getByText } = render(<GroupToggle {...mockProps} />);
        getByText('Color').click();
        expect(mockProps.setSortCriteria).toHaveBeenCalled();
    }
    )
})