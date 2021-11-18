//Unit Testing with Mocha and Chai
const assert = require('chai').assert;
const C = require('../my');

describe('1st try', function(){
    chai
        let ca = C;
        let phrase = 'Done';

        it('1st test', function(){
            expect(car.prototype.talk).to.be.an('array');
        });

        it('2nd try', function(){
            for(let i=0; i<5; i++ ){
                ca.fireGun();
                assert.isAtLeast(ca.ammo, 0);
            }
        });

        it('3rd try', function(){
            for(let i=0; i<7; i++ ){
            let phrase = ca.talk();
            assert.oneOf(phrase, ca.phrases);
            }
        })

    describe('Testing', function(){

        let phrase = 'strinzwd2';
        let num = 123;

        it('4th try', function(){
            assert.equal(num.ban(), '3');
        });

        })

        it('5th try', function(){
            assert.equal(phrase.sad(), 'dan');
        });
})