# js-sort
Package provides the implementation of various statistics distribution such as normal distribution, fisher, student-t, and so on

[![Build Status](https://travis-ci.org/cschen1205/js-sorting-algorithms.svg?branch=master)](https://travis-ci.org/cschen1205/js-sorting-algorithms) [![Coverage Status](https://coveralls.io/repos/github/cschen1205/js-sorting-algorithms/badge.svg?branch=master)](https://coveralls.io/github/cschen1205/js-sorting-algorithms?branch=master) 

# Features

In terms of usage, the user has the following benefit of using the sorting algorithms:

* Customizable comparer function for the sorting function
* Allow user to sort a sublist of an array starting and ending at the user-defined indices

In terms of supported algorithms for sorting:

* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* 3-Ways Quick Sort (WIP)
* Heap Sort (WIP)
* Shell Sort

# Install

Run the following npm command to install

```bash
npm install js-sorting-algorithms
```

# Usage

To sort an array "a" using any of the sorting algorithms:

```javascript
jss.insertionSort(a);
jss.selectionSort(a);
jss.shellSort(a);
jss.mergeSort(a);
jss.quickSort(a);
```

Additionally user can specify the range in "a" to do the sorting as well as customized comparer:

```javascript
var comparer = function(a1, a2){
    return a1 - a2;
};

jss.insertionSort(a, lo, hi, comparer);
```


Sample code is available at [playground](https://runkit.com/cschen1205/js-sorting-algorithms-playground)

### Using with nodejs

```javascript
jssort = require('js-sort');

//====================Simple====================//

var a = [3, 4, 5, 1, 2, 4, 6, 8, 9, 3, 4, 67, 34, 53, 44, 2];
jssort.insertionSort(a);
console.log(a);

//====================Sort with custom comparer function====================//
var a = [[3, 2.3], [4, 3.1], [5, 1.1], [1, 4.2], [2, 4.2], [4, 5.3], [6, 7.4], [8, 5.1], [9, 1.9], [3, 1.2], [4, 3.4], [67, 6.7], [34, 3], [53, 5], [44, 4.2], [2, 0]];
jssort.insertionSort(a, undefined, undefined, function(a1, a2){
         return a1[1] - a2[1];
});
console.log(a);


//====================Sort sub-arrray a[3:10] ====================//
var a = [3, 4, 5, 1, 2, 4, 6, 8, 9, 3, 4, 67, 34, 53, 44, 2];
jssort.insertionSort(a, 3, 10);
console.log(a);



```

### Using with HTML page

