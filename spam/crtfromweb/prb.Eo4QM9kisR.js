
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\((\\sqrt{2})^{4} = 4\\) `;
	var cho2=` \\((\\sqrt{4})^{2} = 4\\) `;
	var cho3=` \\((\\sqrt{3})^{6} = 27\\) `;
	var ans=` \\((\\sqrt{3})^{4} = 9\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	