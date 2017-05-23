var jssort = jssort || {};

(function(jss){
	
    jss.less = function(a1, a2, compare) {
      return compare(a1, a2) < 0;  
    };
    
    jss.exchange = function(a, i, j){
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    jss.selectionSort = function(a, lo, hi, compare){
        if(!lo) lo = 0;
        if(!hi) hi = a.length-1;
        if(!compare) {
            compare = function(a1, a2){
                return a1 - a2;
            };
        }
        for(var i=lo; i <= hi; ++i){
            var minValue = a[i];
            var J = -1;
            for(var j = i+1; j <= hi; ++j){
                if(jss.less(a[j], minValue, compare)){
                    J = j;
                    minValue = a[j];
                }
            }
            if(J != -1){
                jss.exchange(a, i, J);
            }
        }
    };
    
    jss.insertionSort = function(a, lo, hi, compare){
        
    };

})(jssort);

if(module) {
	module.exports = jssort;
}