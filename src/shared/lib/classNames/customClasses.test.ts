import customClasses from './customClasses'

describe('classNames', () => {
    test('with only first param', () => {
        expect(customClasses('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(customClasses('someClass', {}, ['class1', 'class2']))
            .toBe(expected)
    })

    test('with mods', () => {
        const expected = 'someClass hovered scrollable class1 class2'
        expect(customClasses('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods false', () => {
        const expected = 'someClass hovered class1 class2'
        expect(customClasses('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods undefined', () => {
        const expected = 'someClass hovered class1 class2'
        expect(customClasses('someClass', { hovered: true, scrollable: '' }, ['class1', 'class2'])).toBe(expected)
    })
})
