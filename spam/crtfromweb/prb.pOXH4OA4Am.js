
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` 7시 \\(\\frac{510}{11}\\) 분 `;
	var cho2=` 7시 \\(\\frac{490}{11}\\) 분 `;
	var cho3=` 7시 \\(\\frac{500}{11}\\) 분 `;
	var ans=` 7시 \\(\\frac{480}{11}\\) 분 `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	