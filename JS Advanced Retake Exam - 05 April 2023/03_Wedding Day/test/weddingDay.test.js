import { assert } from 'chai';
import { weddingDay } from '../weddingDay.js';

describe('test the functionality of the task', () => {
    describe('test the functionality of pickVenue', () => {
        it('should throw an error', () => {
            assert.throws(() => weddingDay.pickVenue('safsa', 23, 'dsa'), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.pickVenue(43, [], 'dsa'), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.pickVenue(52, 213, true), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.pickVenue(21, 43, ''), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.pickVenue(21, 43, 'da'), Error, 'The location of this venue is not in the correct area!');
        });

        it('should return negative output', () => {
            assert.deepEqual(weddingDay.pickVenue(231, 145, 'Varna'), 'This venue does not meet your requirements!');
        });

        it('should return negative output', () => {
            assert.deepEqual(weddingDay.pickVenue(123, 114, 'Varna'), 'This venue does not meet your requirements!');
        });

        it('should return positive output', () => {
            assert.deepEqual(weddingDay.pickVenue(231, 113, 'Varna'), 'This venue meets the requirements, with capacity of 231 guests and 113$ cover.');
        });
    });

    describe('test the functionality of otherSpendings', () => {
        it('should throw an error', () => {
            assert.throws(() => weddingDay.otherSpendings({}, [], true), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.otherSpendings([], null, false), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.otherSpendings([], [], 'dsadsa'), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            let weddingDecorationArr = ['flowers', 'Fabric drapes and curtains'];
            let photographyArr = ['pictures', 'video'];
            assert.deepEqual(weddingDay.otherSpendings(weddingDecorationArr, photographyArr, true), 'You spend 2465$ for wedding decoration and photography with 15% discount!');
        });

        it('should throw an error', () => {
            let weddingDecorationArr = ['flowers', 'Fabric drapes and curtains'];
            let photographyArr = ['pictures', 'video'];
            assert.deepEqual(weddingDay.otherSpendings(weddingDecorationArr, photographyArr, false), 'You spend 2900$ for wedding decoration and photography!');
        });
    });

    describe('test the functionality of tableDistribution', () => {
        it('should throw an error', () => {
            assert.throws(() => weddingDay.tableDistribution('dsadsa', 23), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.tableDistribution(-2, 23), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.tableDistribution(67, []), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => weddingDay.tableDistribution(67, -73), Error, 'Invalid Information!');
        });

        it('should return negative output', () => {
            assert.deepEqual(weddingDay.tableDistribution(7, 2), 'There is only 4 people on every table, you can join some tables.');
        });

        it('should return negative output', () => {
            assert.deepEqual(weddingDay.tableDistribution(19, 3), 'You have 3 tables with 6 guests on table.');
        });
    });
});