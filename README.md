# js-sort
Package provides the implementation of various statistics distribution such as normal distribution, fisher, student-t, and so on

[![Build Status](https://travis-ci.org/cschen1205/js-sort.svg?branch=master)](https://travis-ci.org/cschen1205/js-sort) [![Coverage Status](https://coveralls.io/repos/github/cschen1205/js-sort/badge.svg?branch=master)](https://coveralls.io/github/cschen1205/js-sort?branch=master) 

# Features

* Normal Distribution
  
  - cumulativeProbability(Z)
  - invCumulativeProbability(p)

* Student's T Distribution

  - cumulativeProbability(t_df)
  - invCumulativeProbability(p)

* Fisher–Snedecor Distribution

  - cumulativeProbabiliyt(F)

* Chi-Square Distribution

  - cumulativeProbabiliy(ChiSquare)

# Install

Run the following npm command to install

```bash
npm install js-sort
```

# Usage

Sample code is available at [playground](https://runkit.com/cschen1205/js-sort-playground)

### Using with nodejs

```javascript
jssort = require('js-sort');

//====================NORMAL DISTRIBUTION====================//

var mu = 0.0; // mean
var sd = 1.0; // standard deviation
var normal_distribution = new jssort.NormalDistribution(mu, sd);

var X = 10.0; // point estimate value 
var p = normal_distribution.cumulativeProbability(X); // cumulative probability

var p = 0.7; // cumulative probability
var X = normal_distribution.invCumulativeProbability(p); // point estimate value

//====================T DISTRIBUTION====================//

var df = 10; // degrees of freedom for t-distribution
var t_distribution = new jssort.TDistribution(df);

var t_df = 10.0; // point estimate or test statistic
var p = t_distribution.cumulativeProbability(t_df); // cumulative probability

var p = 0.7;
var t_df = t_distribution.invCumulativeProbability(p); // point estimate or test statistic


//====================F DISTRIBUTION====================//

var df1 = 10; // degrees of freedom for f-distribution
var df2 = 20; // degrees of freedom for f-distribution
var f_distribution = new jssort.FDistribution(df1, df2);

var F = 10.0; // point estimate or test statistic
var p = f_distribution.cumulativeProbability(F); // cumulative probability


//====================Chi Square DISTRIBUTION====================//

var df = 10; // degrees of freedom for cs-distribution
var cs_distribution = new jssort.ChiSquareDistribution(df);

var X = 10.0; // point estimate or test statistic
var p = cs_distribution.cumulativeProbability(X); // cumulative probability



```

### Using with HTML page

