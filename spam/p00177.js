module.exports={
spamprb:function(prbrows){
var prbchk=0;
var path=require('./prismpath.json');
var async=require('async');
var pr=require(path.prismbin+'prbtest');
var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
var Nans=rst[1];

var cho1=`\\(x^{3}(x+y^{2})\\)`;
var cho2=`\\(x^{3}y^{2}(x-2y)(x+3y)(2x-y)\\)`;
var cho3=`\\(x^{2}y(x+y)(x-2y)(x+3y)(3x-3)\\)`;
var ans=`\\(x^{2}y(x+y)(x-2y)(x+3y)(2x-y)\\)`;
prbcontent=`prbcontent=`+prbrows;
eval(prbcontent);


return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
}
};