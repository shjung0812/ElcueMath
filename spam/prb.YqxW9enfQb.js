
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(y=-(x+1)^{2}+5\\) `;
	var cho2=` \\(y=(x-2)^{2}+3\\) `;
	var cho3=` \\(y=2(x-2)^{2}+2\\) `;
	var ans=` \\(y=-(x-2)^{2}+5\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	