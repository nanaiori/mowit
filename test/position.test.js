const assert = require('assert');

const Coordinate  = require('../lib/coordinate');
const Position = require('../lib/position');


describe('Position', function() {
    
    let coordinate = new Coordinate(0, 0)

    test("jette une erreur sur init si la coordonnée n'est pas valide", function () {
        var errorMsg = /X and Y must be an integer/;

        assert.throws(function () {var p = new Position(new Coordinate('X', 0), 'N'); }, errorMsg);
        assert.throws(function () {var p = new Position(new Coordinate('X', 'Y'), 'N'); }, errorMsg);
        assert.throws(function () {var p = new Position(new Coordinate(0, 'Y'), 'N'); }, errorMsg);
    });

    test("throw an error on init if direction is invalid", function () {
        let errorMsg = /coordinate or direction is invalid/;

        assert.throws(function () {var p = new Position(coordinate, 'A'); }, errorMsg);
        assert.throws(function () {var p = new Position(coordinate, 2); }, errorMsg);
    });

    test("jette une erreur sur init si la direction n'est pas valide", function () {
        let coordinate = new Coordinate(0, 0);
        assert.doesNotThrow(function () {var p = new Position(coordinate, 'N');});
    });
});

