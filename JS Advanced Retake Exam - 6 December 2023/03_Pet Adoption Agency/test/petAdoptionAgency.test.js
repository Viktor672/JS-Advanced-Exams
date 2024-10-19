import { assert } from 'chai';
import { petAdoptionAgency } from '../petAdoptionAgency.js';

describe('test the functionality of the task', () => {
    describe('test the functionality of isPetAvailable', () => {
        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable([], 23, true), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable('dsa', {}, false), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable('dsa', 23, null), Error, 'Invalid input');
        });

        it('should return negative output', () => {
            assert.deepEqual(petAdoptionAgency.isPetAvailable('cat', -3, true), 'Sorry, there are no cat(s) available for adoption at the agency.');
        });

        it('should return negative output', () => {
            assert.deepEqual(petAdoptionAgency.isPetAvailable('cat', 3, false), 'Great! We have 3 cat(s) available for adoption, but they need vaccination.');
        });

        it('should return positive output', () => {
            assert.deepEqual(petAdoptionAgency.isPetAvailable('cat', 3, true), 'Great! We have 3 vaccinated cat(s) available for adoption at the agency.');
        });

    });

    describe('test the functionality of getRecommendedPets', () => {
        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets({}, 'dsa'), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets([], true), Error, 'Invalid input');
        });

        it('should return negative output', () => {
            let arr = [{ name: 'cat', traits: 'ab' }, { name: 'dog', traits: 'cd' }];
            assert.deepEqual(petAdoptionAgency.getRecommendedPets(arr, 'ef'), 'Sorry, we currently have no recommended pets with the desired traits: ef.')
        });

        it('should return positive output', () => {
            let arr = [{ name: 'cat', traits: 'ab' }, { name: 'dog', traits: 'cd' }, { name: 'elephant', traits: 'ab' }];
            assert.deepEqual(petAdoptionAgency.getRecommendedPets(arr, 'ab'), 'Recommended pets with the desired traits (ab): cat, elephant')
        });
    });

    describe('test the functionality of adoptPet', () => {
        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.adoptPet([], 'Gosho'), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            assert.throws(() => petAdoptionAgency.adoptPet('cat', undefined), Error, 'Invalid input');
        });

        it('should return output', () => {
            assert.deepEqual(petAdoptionAgency.adoptPet('cat', 'Gosho'), 'Congratulations, Gosho! You have adopted cat from the agency. Enjoy your time with your new furry friend!');
        });
    });
});