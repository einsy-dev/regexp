/* eslint-disable indent *//* eslint-disable linebreak-style */
import Validator from '../app';

describe('Тестирование класса Validator', () => {
    test('Проверка валидации имени 1', () => {
        expect(new Validator('Lila-shera_109-')
            .ValidateUserName())
            .toBe(false);
    });
    test('Проверка валидации имени 2', () => {
        expect(new Validator('Lila-8454_Lui')
            .ValidateUserName())
            .toBe(false);
    });
    test('Проверка валидации имени 3', () => {
        expect(new Validator('Lila-shera_1099Слава')
            .ValidateUserName())
            .toBe(false);
    });
    test('Проверка валидации имени 4', () => {
        expect(new Validator('Lila-shera_109')
            .ValidateUserName())
            .toBe(false);
    });
    test('Проверка валидации имени 5', () => {
        expect(new Validator('Lila-shera_109-L')
            .ValidateUserName())
            .toBe(true);
    });
});
