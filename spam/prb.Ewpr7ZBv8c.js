
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\((\\frac{17}{6}, \\frac{23}{6})\\) `;
	var cho2=` \\((\\frac{11}{6}, \\frac{25}{6})\\) `;
	var cho3=` \\((\\frac{13}{6}, \\frac{11}{6})\\) `;
	var ans=` \\((\\frac{13}{6}, \\frac{25}{6})\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	