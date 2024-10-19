import { assert } from 'chai';
import { artGallery } from '../artGallery.js';

describe('test the functionality of the task', () => {

    describe('test the functionality of addArtwork', () => {
        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork([], '23 x 12', 'dasdsa'), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork(null, '213  x  21', 54), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork('dsad', '213 2131', 'dsafa'), Error, 'Invalid Dimensions!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork('dsad', true, 'dsafa'), Error, 'Invalid Dimensions!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork('dsa', '21 x 34', 54), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork('sdasad', '21 x 34', {}), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.addArtwork('sdasad', '21 x 34', 'dfdsf'), Error, 'This artist is not allowed in the gallery!');
        });

        it('should return positive output', () => {
            assert.deepEqual(artGallery.addArtwork('sdasad', '21 x 34', 'Picasso'), "Artwork added successfully: 'sdasad' by Picasso with dimensions 21 x 34.");
        });
    });

    describe('test the functionality of calculateCost', () => {
        it('should throw an error', () => {
            assert.throws(() => artGallery.calculateCosts('sda', 21, true), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.calculateCosts(34, 'da', false), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.calculateCosts(34, 21, {}), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.calculateCosts(-34, 21, true), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.calculateCosts(34, -21, false), Error, 'Invalid Information!');
        });

        it('should return positive output', () => {
            assert.deepEqual(artGallery.calculateCosts(34, 21, true), 'Exhibition and insurance costs are 49.5$, reduced by 10% with the help of a donation from your sponsor.');
        });

        it('should return negative output', () => {
            assert.deepEqual(artGallery.calculateCosts(34, 21, false), 'Exhibition and insurance costs are 55$.');
        });
    });

    describe('test the functionality of organizeExhibits', () => {
        it('should throw an error', () => {
            assert.throws(() => artGallery.organizeExhibits('dsa', 23), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.organizeExhibits(34, []), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.organizeExhibits(-34, 25), Error, 'Invalid Information!');
        });

        it('should throw an error', () => {
            assert.throws(() => artGallery.organizeExhibits(34, -25), Error, 'Invalid Information!');
        });

        it('should return negative output', () => {
            assert.deepEqual(artGallery.organizeExhibits(5, 2), 'There are only 2 artworks in each display space, you can add more artworks.');
        });

        it('should return positive output', () => {
            assert.deepEqual(artGallery.organizeExhibits(15, 2), 'You have 2 display spaces with 7 artworks in each space.');
        });
    });
}); 