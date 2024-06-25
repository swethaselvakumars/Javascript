let str1="smart"
let arr=str1.split('')

for(var i=0;i<arr.length -1;i++){
for(var j=0;j<arr.length -1 -i;j++){
    
if(arr[j] < arr[j+1]){
    var store=arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=store
}
}}

var sortedarr=arr.join('')
console.log(sortedarr)
