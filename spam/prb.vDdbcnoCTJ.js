
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(x=-10\\) 또는 \\(x=9\\) `;
	var cho2=` \\(x=-9\\) 또는 \\(x=10\\) `;
	var cho3=` \\(x=-6\\) 또는 \\(x=15\\) `;
	var ans=` \\(x=-18\\) 또는 \\(x=5\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	