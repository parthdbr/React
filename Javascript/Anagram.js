let A = "Mary";
let B = "Army";

const anagram = (a,b) => {
    let str1 = a.toLowerCase();
    let str2 = b.toLowerCase();

    let x = str1.split('').sort().join('');
    let y = str2.split('').sort().join('');

    return x===y;

}

if(anagram(A,B)){
    console.log("It is Anagram");
}else{
    console.log("It's not an anagram");
}