
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(2(3+\\sqrt{3}) \\; cm\\) `;
	var cho2=` \\(4(3-\\sqrt{2})\\; cm\\) `;
	var cho3=` \\(3(\\sqrt{2}+\\sqrt{3}) \\; cm\\) `;
	var ans=` \\(6(3 - \\sqrt{3}) \\; cm\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	