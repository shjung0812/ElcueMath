
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` (1) \\(19 \\; cm^{2}\\) (2) 4 cm `;
	var cho2=` (1) \\(20 \\; cm^{2}\\) (2) 3 cm `;
	var cho3=` (1) \\(18 \\; cm^{2}\\) (2) 4 cm `;
	var ans=` (1) \\(18 \\; cm^{2}\\) (2) 3 cm `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	