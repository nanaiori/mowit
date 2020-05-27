/*global describe,it*/
const assert = require('assert');

const Coordinate  = require('../lib/coordinate');
const Position = require('../lib/position');
const Zone = require('../lib/zone');
const Mower = require('../lib/mower');

var fixtures = [
    { ori:{x:4,y:4,dir:'S'}, des:{x:1,y:3,dir:'W'}, cmd:'GADDAAGADAA'},
    { ori:{x:2,y:2,dir:'N'}, des:{x:2,y:5,dir:'N'}, cmd:'AADGGDADGA'},
    { ori:{x:0,y:0,dir:'S'}, des:{x:0,y:1,dir:'N'}, cmd:'ADADA'},
    { ori:{x:5,y:0,dir:'S'}, des:{x:5,y:1,dir:'N'}, cmd:'AGAGA'},
    { ori:{x:5,y:5,dir:'N'}, des:{x:5,y:4,dir:'S'}, cmd:'ADADA'},
    { ori:{x:0,y:5,dir:'N'}, des:{x:0,y:4,dir:'S'}, cmd:'AGAGA'}
];

describe('Mower', function() {
    var zone = new Zone(new Coordinate(5,5));

    describe('run()', function () {
        fixtures
        .forEach(function(d) {
            test('['+d.des.x+', '+d.des.y+', '+ d.des.dir +'] si origine = ['+d.ori.x+', '+d.ori.y+', '+ d.ori.dir +'] et cmd '+ d.cmd, function (){
                var mower = new Mower(zone, new Position(new Coordinate(d.ori.x, d.ori.y), d.ori.dir));

                mower.run(d.cmd);

                assert.equal(mower.position.toString(), '['+d.des.x+', '+d.des.y+', '+ d.des.dir +']');
            });
        });
    });
});
