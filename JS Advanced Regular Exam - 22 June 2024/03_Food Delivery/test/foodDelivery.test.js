import { assert } from 'chai';
import { foodDelivery } from '../foodDelivery.js';

describe('test the functionality of the task', () => {

    describe('test the functionality of getCategory', () => {
        it('should return output', () => {
            assert.deepEqual(foodDelivery.getCategory('Vegan'), 'Dishes that contain no animal products.');
        });

        it('should return output', () => {
            assert.deepEqual(foodDelivery.getCategory('Vegetarian'), 'Dishes that contain no meat or fish.');
        });

        it('should return output', () => {
            assert.deepEqual(foodDelivery.getCategory('Gluten-Free'), 'Dishes that contain no gluten.');
        });

        it('should return output', () => {
            assert.deepEqual(foodDelivery.getCategory('All'), 'All available dishes.');
        });

        it('should throws Error', () => {
            assert.throws(() => foodDelivery.getCategory('da'), Error, 'Invalid Category!');
        });
    });

    describe('test the functionality of addMenuItem', () => {
        it('should throw Error', () => {
            assert.throws(() => foodDelivery.addMenuItem({}, 21), Error, 'Invalid Information!');
        });

        it('should throw Error', () => {
            assert.throws(() => foodDelivery.addMenuItem([2, 3], true), Error, 'Invalid Information!');
        });

        it('should throw Error', () => {
            assert.throws(() => foodDelivery.addMenuItem([], 21), Error, 'Invalid Information!');
        });

        it('should throw Error', () => {
            assert.throws(() => foodDelivery.addMenuItem(['da', 'hk'], 4), Error, 'Invalid Information!');
        });

        it('should return output', () => {
            let arr = [{ name: "da", price: 1 }, { name: "fa", price: 2 }, { name: "go", price: 3 }, { name: "op", price: 56 }];
            assert.deepEqual(foodDelivery.addMenuItem(arr, 6), 'There are 3 available menu items matching your criteria!');
        });

        describe('test the functionality of calculateOrderCost', () => {
            it('should throw an error', () => {
                assert.throws(() => foodDelivery.calculateOrderCost(true, [], false), Error, 'Invalid Information!');
            });

            it('should throw an error', () => {
                assert.throws(() => foodDelivery.calculateOrderCost([], {}, false), Error, 'Invalid Information!');
            });

            it('should throw an error', () => {
                assert.throws(() => foodDelivery.calculateOrderCost([], [], 23), Error, 'Invalid Information!');
            });

            it('should throw an error', () => {
                assert.throws(() => foodDelivery.calculateOrderCost(true, [], false), Error, 'Invalid Information!');
            });

            it('should return positive output', () => {
                let shippingArr = ['standard', 'express'];
                let addonsArr = ['sauce', 'beverage'];
                assert.deepEqual(foodDelivery.calculateOrderCost(shippingArr, addonsArr, true), 'You spend $10.63 for shipping and addons with a 15% discount!');
            });

            it('should return negative output', () => {
                let shippingArr = ['standard', 'express'];
                let addonsArr = ['sauce', 'beverage'];
                assert.deepEqual(foodDelivery.calculateOrderCost(shippingArr, addonsArr, false), 'You spend $12.50 for shipping and addons!');
            });
        });
    });
});