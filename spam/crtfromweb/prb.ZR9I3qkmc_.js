
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\((\\pi+30) \\; cm\\) `;
	var cho2=` \\(5(\\pi+10) \\; cm\\) `;
	var cho3=` \\(3(5\\pi+3) \\; cm\\) `;
	var ans=` \\(5(\\pi+6) \\; cm\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	