
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(y=-2x+1\\) `;
	var cho2=` \\(y=2x-1\\) `;
	var cho3=` \\(y=\\frac{3}{2}x-5\\) `;
	var ans=` \\(y=\\frac{3}{2}x+\\frac{11}{2}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	