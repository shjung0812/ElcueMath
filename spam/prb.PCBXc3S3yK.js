
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(3x-5 < 2(x+4)\\) `;
	var cho2=` \\(3x-5 \\leq 4x+2\\) `;
	var cho3=` \\(3(x-5) < 2x+4\\) `;
	var ans=` \\(3x-5 \\leq 2(x+4)\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	