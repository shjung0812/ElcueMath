
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(\\angle B = 906\\circ\\)인 직각삼각형 `;
	var cho2=` \\(\\angle A = 90^{\\circ}\\)인 직각삼각형 `;
	var cho3=` a=c인 이등변삼각형 `;
	var ans=` \\(\\angle C = 90^{\\circ}\\)인 직각삼각형 `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	