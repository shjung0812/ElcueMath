
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=`  \\(-\\frac{1}{3} \\leq k \\leq \\frac{5}{2}\\)  `;
	var cho2=`  \\(-\\frac{1}{4} < k \\leq 1\\)  `;
	var cho3=`  \\(-\\frac{1}{2} \\leq k \\leq 2\\)  `;
	var ans=`  \\(-\\frac{1}{4} < k \\leq \\frac{3}{2}\\)  `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	