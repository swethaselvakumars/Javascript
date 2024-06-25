var a="hello universe manifest for me"
var b=""
for(var i=a.length ; i>=0; i--){
    b=b+a.charAt(i)
}

var c=b.split(' ')
var d=" "

for(var i=c.length -1 ; i>=0; i--){
    d=d+c[i]+" "
}
console.log(d)