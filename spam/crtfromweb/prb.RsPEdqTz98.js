
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(-32 < y < -\\frac{28}{3}\\) `;
	var cho2=` \\(-\\frac{32}{3} < y < 2\\) `;
	var cho3=` \\(-32 < y < -12\\) `;
	var ans=` \\(-38 < y < -14\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	