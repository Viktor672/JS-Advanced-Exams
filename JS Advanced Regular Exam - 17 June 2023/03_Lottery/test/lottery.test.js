import { assert } from 'chai';
import { lottery } from '../lottery.js';

describe('test the functionality of the task', () => {
    describe('test the functionality of buyLotteryTicket', () => {
        it('should throw an error', () => {
            assert.throws(() => lottery.buyLotteryTicket(21, 32, false), Error, 'Unable to buy lottery ticket!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.buyLotteryTicket(-2, 13, true), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.buyLotteryTicket(2, 0, true), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.buyLotteryTicket('dsa', 13, true), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.buyLotteryTicket(34, [], true), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.buyLotteryTicket(34, 12, null), Error, 'Invalid input!');
        });

        it('should return output', () => {
            assert.deepEqual(lottery.buyLotteryTicket(9, 7, true), 'You bought 7 tickets for 63$.');
        });
    });


    describe('test the functionality of checkTicket', () => {
        it('should throw an error', () => {
            assert.throws(() => lottery.checkTicket({}, [3, 2, 8, 3, 1, 6]), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 'dsadsa'), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.checkTicket([2, 3], [3, 2, 8, 3, 1, 6]), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [3, 2, 8, 3]), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [3, 2, 8, 3]), Error, 'Invalid input!');
        });

        it('should return output', () => {
            let ticketNumberArr = [2, 1, 2, 6, 4, 5];
            let luckyNumbersArr = [0, 2, 4, 1, 5, 8];
            assert.deepEqual(lottery.checkTicket(ticketNumberArr, luckyNumbersArr), 'Congratulations you win, check your reward!');
        });

        it('should return output', () => {
            let ticketNumberArr = [0, 1, 2, 3, 4, 5];
            let luckyNumbersArr = [2, 4, 1, 3, 5, 0];
            assert.deepEqual(lottery.checkTicket(ticketNumberArr, luckyNumbersArr), 'You win the JACKPOT!!!');
        });

    });


    describe('test the functionality of ', () => {
        it('should throw an error', () => {
            assert.throws(() => lottery.secondChance('dsadsa', []), Error, 'Invalid input!');
        });

        it('should throw an error', () => {
            assert.throws(() => lottery.secondChance(23, {}), Error, 'Invalid input!');
        });

        it('should return positive output', () => {
            let secondChanceArr = [2, 3, 1];
            assert.deepEqual(lottery.secondChance(2, secondChanceArr), 'You win our second chance prize!');
        });

        it('should return negative output', () => {
            let secondChanceArr = [2, 3, 1];
            assert.deepEqual(lottery.secondChance(5, secondChanceArr), "Sorry, your ticket didn't win!");
        });
    });
});