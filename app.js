let num= [1,2,3,4,5,6,7,8,9,10]
console.log(num);
let output = []
for(let i = 0; i < num.length; i++){
    if(num[i] % 3 === 0){
        output.push("Three");
    }else if(num[i] % 5 === 0){
        output.push("Five");
    }else{
        output.push(num[i]);
    }
}
console.log(output);