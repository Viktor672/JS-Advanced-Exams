import { assert } from 'chai';
import { onlineStore } from '../onlineStore.js';

describe('test the functionality of the task', () => {
    describe('test the functionality of isProductiveAvailable', () => {
        it('should throw an error', () => {
            assert.throws(() => onlineStore.isProductAvailable(23, 45), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.isProductAvailable('sw', 'dsa'), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.isProductAvailable(34, -45), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.isProductAvailable(34, 'dsa'), Error, 'Invalid input.');
        });

        it('should return negative output', () => {
            assert.deepEqual(onlineStore.isProductAvailable('da', -45), `Sorry, da is currently out of stock.`);
        });

        it('should return negative output', () => {
            assert.deepEqual(onlineStore.isProductAvailable('da', 0), `Sorry, da is currently out of stock.`);
        });

        it('should return positive output', () => {
            assert.deepEqual(onlineStore.isProductAvailable('da', 2), `Great! da is available for purchase.`);
        });

        it('should return positive output', () => {
            assert.deepEqual(onlineStore.isProductAvailable('eq', 4), `Great! eq is available for purchase.`);
        });
    });

    describe('test the functionality of canAffordProduct', () => {
        it('should throw an error', () => {
            assert.throws(() => onlineStore.canAffordProduct('da', 23), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.canAffordProduct(23, 'da'), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.canAffordProduct('eq', 'da'), Error, 'Invalid input.');
        });

        it('should return negative output', () => {
            assert.deepEqual(onlineStore.canAffordProduct(3, 2), "You don't have sufficient funds to buy this product.");
        });

        it('should return negative output', () => {
            assert.deepEqual(onlineStore.canAffordProduct(2, 3), `Product purchased. Your remaining balance is $1.`);
        });

        it('should return negative output', () => {
            assert.deepEqual(onlineStore.canAffordProduct(3, 3), `Product purchased. Your remaining balance is $0.`);
        });
    });

    describe('test the functionality of getRecommendedProducts', () => {
        it('should throw an error', () => {
            assert.throws(() => onlineStore.getRecommendedProducts({}, 'das'), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.getRecommendedProducts([], false), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            assert.throws(() => onlineStore.getRecommendedProducts(null, 42), Error, 'Invalid input.');
        });

        it('should throw an error', () => {
            let product = [
                { name: "gosho", category: "fa" },
                { name: "pesho", category: "ga" },
                { name: "rojo", category: "fa" }
            ]
            assert.deepEqual(onlineStore.getRecommendedProducts(product, 'ba'), `Sorry, we currently have no recommended products in the ba category.`);
        });

        it('should throw an error', () => {
            let product = [
                { name: "gosho", category: "fa" },
                { name: "pesho", category: "ga" },
                { name: "rojo", category: "fa" }
            ]
            assert.deepEqual(onlineStore.getRecommendedProducts(product, 'fa'), `Recommended products in the fa category: gosho, rojo`);
        });
    });
});