
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(\\frac{18\\sqrt{10}}{5}\\) `;
	var cho2=` \\(3\\sqrt{10}\\) `;
	var cho3=` \\(\\frac{6\\sqrt{10}}{5}\\) `;
	var ans=` \\(\\frac{12\\sqrt{10}}{5}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	