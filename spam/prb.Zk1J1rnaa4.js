
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=`  \\(\\frac{\\sqrt{6}}{4}\\)  `;
	var cho2=`  \\(\\frac{\\sqrt{3}}{4}\\)  `;
	var cho3=`  \\(\\frac{\\sqrt{6}}{8}\\)  `;
	var ans=`  \\(\\frac{\\sqrt{3}}{2}\\)  `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	