
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\((4+2\\sqrt{3}) \\; cm\\) `;
	var cho2=` \\((6+\\sqrt{3}) \\; cm\\) `;
	var cho3=` \\((4+\\sqrt{3}) \\; cm\\) `;
	var ans=` \\((6+2\\sqrt{3}) \\; cm\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	