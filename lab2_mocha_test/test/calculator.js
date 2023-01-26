const chai = require('chai')
const expect = chai.expect

const calculator = require('../calculator.js')

// Write one success and one fail test of add, sub, div and mul for calculator.js
describe('Calculator', () => {
        // Create from this sample: add(5, 2) expected result 7 PASS and expected result 8 FAIL
        describe('add', () => {
            it('should add two numbers - add(5, 2) - expects 7', () => {
                expect(calculator.add(5, 2)).to.equal(7)
            })
            it('should add two numbers - add(5, 2) - expects 8', () => {
                expect(calculator.add(5, 2)).to.equal(8)
            })
        })

        // sub(5, 2) expected result 3 PASS and sub(5,2) expected result 5 FAIL
        describe('sub', () => {
            it('should subtract two numbers - sub(5, 2) - expects 3', () => {
                expect(calculator.sub(5, 2)).to.equal(3)
            })
            it('should subtract two numbers - sub(5, 2) - expects 5', () => {
                expect(calculator.sub(5, 2)).to.equal(5)
            })
        })

        describe('mul', () => {
            // mul(5, 2) expected result 10 PASS and mul(5,2) expected result 12 FAIL
            it('should multiply two numbers - mul(5, 2) - expects 10', () => {
                expect(calculator.mul(5, 2)).to.equal(10)
            })
            it('should multiply two numbers - mul(5,2) - expects 12', () => {
                expect(calculator.mul(5, 2)).to.equal(12)
            })
        })

        // div(10, 2) expected result 5 PASS and div(10,2) expected result 2 FAIL
        describe('div', () => {
            it('should divide two numbers - div(10, 2) - expects 5', () => {
                expect(calculator.div(10, 2)).to.equal(5)
            })
            it('should divide two numbers - expects 2', () => {
                expect(calculator.div(10, 2)).to.equal(2)
            })
        })

    }
)
