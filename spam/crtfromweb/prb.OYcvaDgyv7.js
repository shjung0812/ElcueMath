
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(-\\frac{1}{4^{2}} = \\frac{1}{16}\\) `;
	var cho2=` \\(\\left( -\\frac{1}{4}\\right)^{2} =-\\frac{1}{16}\\) `;
	var cho3=` \\(-3^{3} =27\\) `;
	var ans=` \\(-\\left( -\\frac{1}{4} \\right)^{3} = \\frac{1}{64}\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	