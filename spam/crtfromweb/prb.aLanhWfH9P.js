
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(\\frac{8\\sqrt{3}}{3} \\; cm^{2}\\) `;
	var cho2=` \\(\\frac{5\\sqrt{3}}{3} \\; cm^{2}\\) `;
	var cho3=` \\(\\frac{7\\sqrt{3}}{2} \\; cm^{2}\\) `;
	var ans=` \\(\\frac{9\\sqrt{3}}{2} \\; cm^{2}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	