
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(\\log_a b\\) `;
	var cho2=` \\(\\log ab\\) `;
	var cho3=` \\(a\\log b\\) `;
	var ans=` \\(\\log_b a\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	