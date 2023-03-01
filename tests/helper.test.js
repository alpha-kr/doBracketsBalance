const helpers = require('../helpers');

describe('method doBracketsBalance', function () {

    test('can validate not string parameter.', () => {
        const testCase = 1;

        const isValidString = helpers.doBracketsBalance(testCase);

        expect(isValidString).toBe(false);
    });

    test('can validate empty string.', () => {
        const testCase = '';

        const isValidString = helpers.doBracketsBalance(testCase);

        expect(isValidString).toBe(false);
    });

    test('can validate opening and closing brackets types side by side.', () => {
        const testCase = '{}[]()';

        const isValidString = helpers.doBracketsBalance(testCase);

        expect(isValidString).toBe(true);
    });

    test('can validate invalid  string curly brackets.', () => {
        const testCase = '{{}{';

        expect(helpers.doBracketsBalance(testCase)).toBe(false);
    });

    test('can validate valid  string curly brackets.', () => {
        const testCase = '{}{}{{}}';

        expect(helpers.doBracketsBalance(testCase)).toBe(true);
    });

    test('can validate invalid square string brackets.', () => {
        const testCase = '[[][';

        expect(helpers.doBracketsBalance(testCase)).toBe(false);
    });

    test('can validate valid square brackets.', () => {
        const testCase = '[][][[]]';

        expect(helpers.doBracketsBalance(testCase)).toBe(true);
    });

    test('can validate valid parentheses string.', () => {
        const testCase = '()()(())';

        expect(helpers.doBracketsBalance(testCase)).toBe(true);
    });

    test('can validate invalid square parentheses string.', () => {
        const testCase = '()()(()';

        expect(helpers.doBracketsBalance(testCase)).toBe(false);
    });

    test('can validate nested mixed valid string brackets.', () => {
        const testCase = '({[]})[]';

        expect(helpers.doBracketsBalance(testCase)).toBe(true);
    });

    test('can validate nested mixed invalid string brackets.', () => {
        const testCase = '({[})[]';

        expect(helpers.doBracketsBalance(testCase)).toBe(false);
    });

    test('can validate individually parentheses, curly brackets, brackets.', () => {
        const symbols = ['[', '{', '(', ']', '}', ')'];

        for (const item of symbols) {
            expect(helpers.doBracketsBalance(item)).toBe(false);
        }
    });

    test('can validate pair of valid opening and closing parentheses, curly brackets, brackets.', () => {
        const symbols = ['[]', '{}', '()'];

        for (const item of symbols) {
            expect(helpers.doBracketsBalance(item)).toBe(true);
        }
    });

    test('can validate pair of invalid opening and closing parentheses, curly brackets, brackets.', () => {
        const symbols = ['{]', '{)', '[}', '[)', '(}', '(]'];

        for (const item of symbols) {
            expect(helpers.doBracketsBalance(item)).toBe(false);
        }
    });

});
