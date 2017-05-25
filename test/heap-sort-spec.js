var expect    = require("chai").expect;
var jssort = require("../src/jssort");

describe("Heap Sort", function() {
  describe("Sort Ascendingly", function() {
    
    it("should sort ascedingly when no compare function is provided", function() {
    	
        var a = [3, 4, 5, 1, 2, 4, 6, 8, 9, 3, 4, 67, 34, 53, 44, 2];
        jssort.heapSort(a);
        for(var i = 1; i < a.length; ++i){
            expect(a[i-1]).not.to.above(a[i]);
        }
    });
      
    it("should sort ascedingly using the provided comparer", function() {
    	
        var a = [[3, 2.3], [4, 3.1], [5, 1.1], [1, 4.2], [2, 4.2], [4, 5.3], [6, 7.4], [8, 5.1], [9, 1.9], [3, 1.2], [4, 3.4], [67, 6.7], [34, 3], [53, 5], [44, 4.2], [2, 0]];
        jssort.heapSort(a, function(a1, a2){
                 return a1[1] - a2[1];
        });
        for(var i = 1; i < a.length; ++i){
            expect(a[i-1][1]).not.to.above(a[i][1]);
        }
    });
  });
         
});