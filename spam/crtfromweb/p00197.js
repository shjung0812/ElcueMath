module.exports={
spamprb:function(prbrows){
var prbchk=0;
var path=require('./prismpath.json');
var async=require('async');
var pr=require(path.prismbin+'prbtest');
var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
var Nans=rst[1];

var cho1=`\\(x\\)`;
var cho2=`\\(3\\)`;
var cho3=`\\(\\frac{1}{(x-1)(x-3)(x-5)(x-7)}\\)`;
var ans=`\\(\\frac{-16(x-4)}{(x-1)(x-3)(x-5)(x-7)}\\)`;
prbcontent=`prbcontent=`+prbrows;
eval(prbcontent);


return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
}
};