import { assert } from 'chai';
import { recipeSelection } from '../recipeSelection.js';

describe('test the functionality of the task', () => {
    describe('test the functionality of isTypeSuitable', () => {
        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isTypeSuitable(22, 'str'), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isTypeSuitable('str', []), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isTypeSuitable({}, true), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isTypeSuitable(22, 'adsad'), Error, 'Invalid input');
        });

        it('should return a negative output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Meat', 'Vegetarian'), 'This recipe is not suitable for vegetarians');
        });

        it('should return a negative output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Meat', 'Vegan'), 'This recipe is not suitable for vegans');
        });

        it('should return a negative output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Dairy', 'Vegan'), 'This recipe is not suitable for vegans');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Meda', 'Vegetarian'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Meat', 'Vegetaria'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Meda', 'Vegan'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Dai', 'Vegan'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Meat', 'Veg'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('Dairy', 'Veg'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('de', 'by'), 'This recipe is suitable for your dietary restriction');
        });

        it('should return a positive output', () => {
            assert.deepEqual(recipeSelection.isTypeSuitable('jh', 'ch'), 'This recipe is suitable for your dietary restriction');
        });
    });

    describe('test the functionality of isitAffordable', () => {
        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isItAffordable('str', 23), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isItAffordable(23, []), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.isItAffordable({}, false), Error, 'Invalid input');
        });

        it('should return a negative output', () => {
            assert.deepEqual(recipeSelection.isItAffordable(3, 2), "You don't have enough budget to afford this recipe");
        });

        it('should return a negative output', () => {
            assert.deepEqual(recipeSelection.isItAffordable(-2, -4), "You don't have enough budget to afford this recipe");
        });

        it('should return a postive output', () => {
            assert.deepEqual(recipeSelection.isItAffordable(2, 4), `Recipe ingredients bought. You have 2$ left`);
        });

        it('should return a postive output', () => {
            assert.deepEqual(recipeSelection.isItAffordable(0, 0), `Recipe ingredients bought. You have 0$ left`);
        });
    });

    describe('test the functionality of getRecipesByCategory', () => {
        it('should return positive input', () => {
            let recipes = [
                { title: 'salad', category: 'greek' },
                { title: 'sda', category: 'bulgarian' },
                { title: 'fsa', category: 'spanish' },
                { title: 'dsad', category: 'romanian' },
            ]

            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, 'bulgarian'), ['sda']);
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, 'greek'), ['salad']);
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, 'romanian'), ['dsad']);
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, 'spanish'), ['fsa']);
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.getRecipesByCategory({}, 'str'), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.getRecipesByCategory('str', []), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.getRecipesByCategory(true, 54), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throw(() => recipeSelection.getRecipesByCategory([], 54), Error, 'Invalid input');
        });

    });
}); 