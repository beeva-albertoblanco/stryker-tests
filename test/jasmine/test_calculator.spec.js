'use strict';
const assert = require("assert");
const rewire = require('rewire');
const service = rewire('../../src/calculator');

describe("Calculator", function(){
    it("substractPositive", function(done){
        var result = service.substractPositive(1, -1);
        expect(result).toBe(2);
        done();
    });

    it("add", function(done){
        var result = service.add(1, 1);
        expect(result).toBe(2);
        done();
    });
});