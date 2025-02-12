//src\client\test\checkURL.js
import { nameChecker } from '../js/validUrl';

describe('Testing URL Validation', () => {
    test('Invalid URLs should return false', () => {
        expect(nameChecker("randomtext")).toBe(false);
    });

    test('Email addresses should not be considered valid URLs', () => {
        expect(nameChecker("mailto:test@Reema.com")).toBe(false);
    });

    test('Properly formatted URLs should return true', () => {
        expect(nameChecker("https://ReemaKusa.com")).toBe(true);
    });

    test('Empty input should return false', () => {
        expect(nameChecker("")).toBe(false);
    });

    test('URLs without protocol should still be valid', () => {
        expect(nameChecker("www.Reema.com")).toBe(true);
    });
});
