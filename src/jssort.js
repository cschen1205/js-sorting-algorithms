var jssort = jssort || {};

(function (jss) {
    'use strict';
	
    jss.less = function (a1, a2, compare) {
        return compare(a1, a2) < 0; 
    };
    
    jss.exchange = function (a, i, j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    };

    jss.selectionSort = function (a, lo, hi, compare) {
        if (!lo) { lo = 0; }
        if (!hi) { hi = a.length - 1; }
        if (!compare) {
            compare = function (a1, a2) {
                return a1 - a2;
            };
        }
        for (var i=lo; i <= hi; ++i){
            var minValue = a[i];
            var J = -1;
            for (var j = i+1; j <= hi; ++j) {
                if (jss.less(a[j], minValue, compare)) {
                    J = j;
                    minValue = a[j];
                }
            }
            if(J != -1){
                jss.exchange(a, i, J);
            }
        }
    };
    
    jss.insertionSort = function(a, lo, hi, compare) {
        if (!lo) lo = 0;
        if (!hi) hi = a.length-1;
        if (!compare) {
            compare = function (a1, a2){
                return a1 - a2;
            };
        }
        
        for (var i = lo+1; i <= hi; ++i){
            for (var j = i; j > lo; --j){
                if (jss.less(a[j], a[j-1], compare)){
                    jss.exchange(a, j-1, j);
                } else {
                    break;
                }
            }
        }
    };
    
    jss.shellSort = function(a, lo, hi, compare) {
        if (!lo) lo = 0;
        if (!hi) hi = a.length-1;
        if (!compare) {
            compare = function (a1, a2) {
                return a1 - a2;
            };
        }
        
        var h = 0;
        while (h - lo < (hi - lo) / 3 ) {
            h = 3 * h + 1;
        }
        
        var step = h;
        while (step >= 1) {
            for (var i = lo + step; i <= hi; i++){
                for(var j = i; j >= lo + step; j -= step) {
                    if(jss.less(a[j], a[j-step], compare)){
                        jss.exchange(a, j, j-step);
                    } else {
                        break;
                    }
                }
            }
            step -= 1;
        }
    };

})(jssort);

if(module) {
	module.exports = jssort;
}