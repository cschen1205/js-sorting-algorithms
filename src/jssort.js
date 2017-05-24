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
    
    jss.mergeSort = function (a, lo, hi, compare, aux) {
        if (!lo) lo = 0;
        if (!hi) hi = a.length-1;
        if (!compare) {
            compare = function (a1, a2){
                return a1 - a2;
            };
        }
        if(!aux) {
            aux = [];
            for (var i = 0; i < a.length; ++i) {
                aux.push(a[i]);
            }
        }
        
        if(lo >= hi) return;
        
        if(hi - lo <= 7) {
            jss.insertionSort(a, lo, hi, compare);
            return;
        }
        
        var mid = Math.floor(lo + (hi - lo) / 2);
        jss.mergeSort(a, lo, mid, compare, aux);
        jss.mergeSort(a, mid+1, hi, compare, aux);
        jss.merge(a, aux, lo, mid, hi, compare);
    };
    
    jss.merge = function (a, aux, lo, mid, hi, compare) {
        for (var k = lo; k <= hi; ++k) {
            aux[k] = a[k];
        }  
        
        var i = lo, j = mid+1;
        for (var k = lo; k <= hi; ++k) {
            if ( i > mid) {
                a[k] = aux[j++];
            }
            else if( j > hi) {
                a[k] = aux[i++];
            }
            else if (jss.less(aux[i], aux[j], compare)) {
                a[k] = aux[i++]; 
            } else {
                a[k] = aux[j++];
            }
        }
        
    };
    
    jss.quickSort = function (a, lo, hi, compare) {
        if (!lo) lo = 0;
        if (!hi) hi = a.length-1;
        if (!compare) {
            compare = function (a1, a2){
                return a1 - a2;
            };
        }
        
        if (lo >= hi) {
            return;
        }
        
        if (hi - lo <= 7) {
            jss.insertionSort(a, lo, hi, compare);
            return;
        }
        
        var j = jss.partition(a, lo, hi, compare);
        jss.quickSort(a, lo, j-1, compare);
        jss.quickSort(a, j+1, hi, compare);
    };
    
    jss.partition = function (a, lo, hi, compare) {
        var v = a[lo];
        var i = lo, j = hi+1;
        while (true) {
            while (jss.less(a[++i], v, compare)) {
                if (i >= hi) {
                    break;
                }
            }
            while (jss.less(v, a[--j], compare)) {
                if (j <= lo) {
                    break;
                }
            }
            
            if(i >= j) {
                break;
            }
            
            jss.exchange(a, i, j);
        }
        
        jss.exchange(a, lo, j);
        return j;
    };

})(jssort);

if(module) {
	module.exports = jssort;
}