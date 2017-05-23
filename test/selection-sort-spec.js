var expect    = require("chai").expect;
var jssort = require("../src/jssort");

describe("Selection Sort", function() {
  describe("Sort Ascendingly", function() {
    
    it("should sort ascedingly when no compare function is provided", function() {
    	
        var a = [3, 4, 5, 1, 2, 4, 6, 8, 9, 3, 4, 67, 34, 53, 44, 2];
        jssort.selectionSort(a);
        for(var i = 1; i < a.length; ++i){
            expect(a[i-1]).not.to.above(a[i]);
        }
    });
  });
});