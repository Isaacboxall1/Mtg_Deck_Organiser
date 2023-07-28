import { verifyTextValiditiy } from "@/utility/functions/verifyTextValidity";

describe('verifyTextValidity', () => {
    test('should return true if all fields contain only letters and numbers', () => {
        const firstName = 'John';
        const lastName = 'Doe';
        const userName = 'johndoe123';
        expect(verifyTextValiditiy(firstName, lastName, userName)).toBe(true);
    }
    )
    test('should return false if any field contains special characters', () => {
        const firstName = 'John';
        const lastName = 'Doe';
        const userName = 'johndoe123!';
        expect(verifyTextValiditiy(firstName, lastName, userName)).toBe(false);
    }
    )
    test('should return false if any field contains spaces apart from at start and end', () => {
        const firstName = 'John';
        const lastName = 'D oe';
        const userName = 'john doe123';
        expect(verifyTextValiditiy(firstName, lastName, userName)).toBe(false);
    }
    )
    test('should return false if any fields are empty', () => {
        const firstName = 'John';
        const lastName = '';
        const userName = 'johndoe123';
        expect(verifyTextValiditiy(firstName, lastName, userName)).toBe(false);
        }
        )
    }
)
