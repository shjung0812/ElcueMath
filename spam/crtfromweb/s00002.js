module.exports={
spamprb:function(prbrows){
var prbchk=0;
var path=require('./prismpath.json');
var async=require('async');
var pr=require(path.prismbin+'prbtest');
var rst=pr.AnsFuncc([[1,10,1],[1,15,1]],'ca<cb');
var Nans=1;
var va=rst[0][0];
var vb=rst[0][1];


var cho1='';
var cho2='';
var cho3='';
var ans=['맞습니다', '꽃미남', '보고싶어요'];

prbcontent=`prbcontent=`+prbrows;
eval(prbcontent);


return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
}
};