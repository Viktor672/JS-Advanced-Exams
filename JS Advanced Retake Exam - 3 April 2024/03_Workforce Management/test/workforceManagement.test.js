import { assert } from 'chai';
import { workforceManagement } from '../workforceManagement.js';

describe('test the functionality of the task', () => {
    describe('test the functionality of recruitStaff', () => {
        it('should throw an error', () => {
            assert.throws(() => workforceManagement.recruitStaff('Gosho', 'adsa', 23), Error, 'We are not currently hiring for this role.');
        });

        it('should return negative output', () => {
            assert.deepEqual(workforceManagement.recruitStaff('Gosho', 'Developer', 3), 'Gosho is not suitable for this role.');
        });

        it('should return positive output', () => {
            assert.deepEqual(workforceManagement.recruitStaff('Gosho', 'Developer', 6), 'Gosho has been successfully recruited for the role of Developer.');
        });
    });

    describe('test the functionality of computeWages', () => {
        it('should throw an error', () => {
            assert.throws(() => workforceManagement.computeWages(true), Error, 'Invalid hours');
        });

        it('should throw an error', () => {
            assert.throws(() => workforceManagement.computeWages(-3), Error, 'Invalid hours');
        });

        it('should return an output', () => {
            assert.deepEqual(workforceManagement.computeWages(248), 5964);
        });

        it('should return an output', () => {
            assert.deepEqual(workforceManagement.computeWages(123), 2214);
        });
    });

    describe('test the functionality of dismissEmployee', () => {
        it('should throw an error', () => {
            assert.throws(() => workforceManagement.dismissEmployee({}, 3), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            let arr = ['Peter', 'Gosho', 'David', 'Martin'];
            assert.throws(() => workforceManagement.dismissEmployee(arr, 3.4), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            let arr = ['Peter', 'Gosho', 'David', 'Martin'];
            assert.throws(() => workforceManagement.dismissEmployee(arr, -4), Error, 'Invalid input');
        });

        it('should throw an error', () => {
            let arr = ['Peter', 'Gosho', 'David', 'Martin'];
            assert.throws(() => workforceManagement.dismissEmployee(arr, 5), Error, 'Invalid input');
        });

        it('should return an output', () => {
            let arr = ['Peter', 'Gosho', 'David', 'Martin'];
            assert.deepEqual(workforceManagement.dismissEmployee(arr, 2), 'Peter, Gosho, Martin');
        });
    });
});
