module.exports={
spamprb:function(prbrows){
var prbchk=0;
var path=require('./prismpath.json');
var pr=require(path.prismbin+'prbtest');
var mbs=require(path.prismbin+'mathbasic');
var rst=pr.AnsFuncc([[-10,10,1],[-10,10,1],[-10,10,1],[-10,10,1]],'(cb-cd)*(ca-cc)==0 || (cb-cd)%(ca-cc)!=0');
var Nans=rst[1];
var va=rst[0][0];
var vb=rst[0][1];
var vc=rst[0][2];
var vd=rst[0][3];

var vu=(vb-vd)/(va-vc);
var con1=vb-vu*va;

var wval=mbs.rvar([va,vb,vu],[[-10,10,1],[-10,10,1],[-10,10,1]]);
var wr1=wval[1]-vu*va;
var wr2=vb-vu*wval[0];
var wr3=vb-wval[2]*va;

var ans=`n=${vu}m+(${con1})`;
var cho1=`n=${vu}m+(${wr1})`;
var cho2=`n=${wr2}m+(${con1})`;
var cho3=`n=${wr3}m+(${wr1})`;
var errchk=0;
while(mbs.dplchk([con1,wr1,wr2,wr3],true)){
 var wval=mbs.rvar([va,vb,vu],[[-10,10,1],[-10,10,1],[-10,10,1]]);
 var wr1=wval[1]-vu*va;
 var wr2=vb-vu*wval[0];
 var wr3=vb-wval[2]*va;

 var cho1=`n=${vu}m+${wr1}`;
 var cho2=`n=${wr2}m+${con1}`;
 var cho3=`n=${wr3}m+${wr1}`;
 if(errchk>1000){
 prbchk=1;
 break;
}
errchk=errchk+1;
}



prbcontent=`prbcontent=`+prbrows;
eval(prbcontent);


return [prbcontent,ans,Nans,cho1,cho2,cho3,prbchk]
}
};
