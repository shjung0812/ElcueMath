
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(-\\frac{1}{3} \\leq a < 0\\) `;
	var cho2=` \\(-\\frac{1}{3} \\leq a < \\frac{1}{3}\\) `;
	var cho3=` \\(a \\geq \\frac{1}{3}\\) `;
	var ans=` \\(a \\leq -\\frac{1}{3}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	