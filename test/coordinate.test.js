const assert = require('assert');
const Coordinate = require('../lib/coordinate');


describe('Coordinate', function() {
    let errorMsg = /X and Y must be an integer/;

    test("jette une erreur sur init si X n'est pas un entier", function () {
        assert.throws(function () {let c = new Coordinate('X', 0); }, errorMsg);
    });

    test("jette une erreur sur init si Y n'est pas un entier", function () {
        assert.throws(function () {let c = new Coordinate(1, 'Y'); }, errorMsg);
    });


    test("ne lance pas d'erreur sur init si X et Y sont entiers", function () {
        assert.doesNotThrow(function () {let c = new Coordinate(1, 1); });
    });
});

