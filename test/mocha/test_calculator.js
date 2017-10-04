'use strict';
const assert = require("assert");
const rewire = require('rewire');
const service = rewire('../../src/calculator');

describe("Calculator", function(){
    it("substractPositive", function(){
        var result = service.substractPositive(1, -1);
        assert.equal("2", result);
    });

    it("add", function(){
        var result = service.add(1, 1);
        assert.equal("2", result);
    });
});