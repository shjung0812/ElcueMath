
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(k(x)=-\\frac{2}{3}x+\\frac{1}{3}\\) `;
	var cho2=` \\(k(x)=-\\frac{2}{3}x+\\frac{2}{3}\\) `;
	var cho3=` \\(k(x)=-x+1\\) `;
	var ans=` \\(k(x)=-\\frac{1}{3}x+\\frac{1}{3}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	