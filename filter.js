var age=[17,18,20,24]
var eligibleage=age.filter(calculate)

function calculate(age){
        return age>18
}
console.log(eligibleage)