
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(13 \\pi -9\\sqrt{3}\\) `;
	var cho2=` \\(18 \\pi -4\\sqrt{3}\\) `;
	var cho3=` \\(11 \\pi -3\\sqrt{3}\\) `;
	var ans=` \\(12 \\pi -9\\sqrt{3}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	