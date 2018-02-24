module.exports = function getZerosCount(number) {
zeros=0;
for (num=5; num<=number; num=num*5)
  zeros=zeros+Math.floor(number/num)
 return zeros;
 }

