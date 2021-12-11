/** oddNumber **/
let number = [1,2,5,6,8,4];
let odd = number.filter(elm=> elm%2 != 0)
console.log(odd);

/** titleCapsArr **/
let str = ["hELLOllO"];
let caps = str.map(elm => elm.charAt(0).toUpperCase()+elm.substr(1).toLowerCase());
console.log(caps);

/** arrTotal **/
let arrTotal = number.reduce((a,b)=> a+b),0)
console.log(arrTotal);

/** primeNumbers **/
let primeNumbers = number.filter((elm)=> {
    for(let i = 2; i < elm; i++){
        if(elm%i === 0) return false;
    }
    return elm > 1;
})
console.log(primeNumbers);

/** palindromes **/
let palindromes = ["pop","radar","hello"]
let palindromesArr = palindromes.filter(elm=> elm.toLowerCase() === elm.split("").reverse().join("").toLowerCase())
console.log(palindromesArr);

