
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(\\frac{173}{4} \\pi \\; cm^{2}\\) `;
	var cho2=` \\(\\frac{172}{4} \\pi \\; cm^{2}\\) `;
	var cho3=` \\(\\frac{179}{4} \\pi \\; cm^{2}\\) `;
	var ans=` \\(\\frac{175}{4} \\pi \\; cm^{2}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	