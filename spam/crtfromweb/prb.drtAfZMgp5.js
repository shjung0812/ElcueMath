
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(\\{-4, 0, 2\\}\\) `;
	var cho2=` \\(\\{-4, -2, -1, 0, 2, 4\\}\\) `;
	var cho3=` \\(\\{0,2\\}\\) `;
	var ans=` \\(\\{-4, -1, 1, 3\\}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	