
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(800(x-5)+400 = 1200x+400\\) `;
	var cho2=` \\(900(x+5)+400 = 2400x+400\\) `;
	var cho3=` \\(900(x-5)+400 = 400x-2400\\) `;
	var ans=` \\(800(x+5)+400 = 1200x-400\\) `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	