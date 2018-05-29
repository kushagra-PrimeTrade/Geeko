// file for the changing candle to desirable size

let lodash = require("lodash");

let candleSize, smallCandles;
function checkSize(candleSize) {
  if(!lodash.isNumber(candleSize))
    throw 'candleSize is not a number';

  this.candleSize = candleSize;
  this.smallCandles = [];

  lodash.bindAll(this);
}


//function to check if array is passed then add the element of array to smallCandles
Candle.prototype.write = function(candles) {
  if(!lodash.isArray(candles))
     console.log('candles is not an array');

  lodash.each(candles, function(candle) {
    this.smallCandles.push(candle);
  }, this);
}


//checkSize(10);