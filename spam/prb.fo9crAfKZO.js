
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(0 \\leq x \\leq \\frac{1}{4}\\) 또는 \\(\\frac{8}{3} \\leq x \\leq \\frac{9}{2}\\) `;
	var cho2=` \\(1 \\leq x \\leq \\frac{3}{4}\\) 또는 \\(\\frac{7}{3} \\leq x \\leq \\frac{11}{2}\\) `;
	var cho3=` \\(\\frac{1}{2} \\leq x \\leq \\frac{3}{4}\\) 또는 \\(\\frac{8}{3} \\leq x \\leq \\frac{13}{4}\\) `;
	var ans=` \\(1 \\leq x \\leq \\frac{3}{4}\\) 또는 \\(\\frac{8}{3} \\leq x \\leq \\frac{9}{2}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	