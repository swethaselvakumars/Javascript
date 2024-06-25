var a=[689,383,389,740,273,863]  //// finding max

for(var i=0; i<=a.length;i++){
for(var j=0; j<a.length-1-i;j++){
    
   if( a[j] < a[j+1])  {   //comparing
    var wait=a[j]   //   687 ,383
    a[j]=a[j+1]      //swap 687 ,383 again it is comparing next 383 , 389 // it will swap  389, 383 
    a[j+1]=wait
     }  //swapped
}}


 var combine=a.join( ''+" ")
var sorts=combine.split(" ")
console.log(sorts[0])