
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` 그런 a와 b는 존재하지 않는다.  `;
	var cho2=`  \\(a=b\\)인 모든실수 a, b `;
	var cho3=` \\(a=2, b=\\frac{1}{2}\\) `;
	var ans=` \\(a=1, b=5\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	