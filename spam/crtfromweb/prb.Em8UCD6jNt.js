
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(50\\sqrt{2}+25\\) `;
	var cho2=` \\(50\\sqrt{3}+25\\sqrt{2}\\) `;
	var cho3=` \\(50\\sqrt{3}+25\\sqrt{6}\\) `;
	var ans=` \\(50\\sqrt{3}+25\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	