
	module.exports={
	spamprb:function(prbrows){
	var prbchk=0;
	var path=require('./prismpath.json');
	var async=require('async');
	var pr=require(path.prismbin+'prbtest');
	var rst=pr.AnsFuncc([[1,10,1],[1,15,1]]);
	var Nans=rst[1];

	var cho1=` \\(-1.222 \\cdots \\) 무한소수 `;
	var cho2=` \\(-1.5\\), 유한소수 `;
	var cho3=` \\(-1.5555 \\cdots \\) 무한소수 `;
	var ans=` \\(-1.2\\), 유한소수 `;
	prbcontent=`prbcontent=`+prbrows;
	eval(prbcontent);


	return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
	}
	};
	