
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(10\\sqrt{10} \\; m\\) `;
	var cho2=` \\(20\\sqrt{2} \\; m\\) `;
	var cho3=` \\(10\\sqrt{6} \\; m\\) `;
	var ans=` \\(10\\sqrt{13} \\; m\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	