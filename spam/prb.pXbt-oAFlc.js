
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(28\\sqrt{2} \\; cm^{2}\\) `;
	var cho2=` \\(14\\sqrt{2} \\; cm^{2}\\) `;
	var cho3=` \\(28 \\; cm^{2}\\) `;
	var ans=` \\(14\\sqrt{3} \\; cm^{2}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	