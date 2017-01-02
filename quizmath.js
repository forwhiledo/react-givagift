

var S=10; // what number it starts
var F=6; // how many answers in that question
var N=100; // how many points is that question worth

var increment= [N-(S*F)] / [ [(F-1)*(F-1+1)]/2 ];

console.log(increment);
console.log('hello');

var array=[S];

console.log(array);

for(var i=1; i< F ; i++){
   array.push(S+increment*[i]);
}

var sum = Math.round(array.reduce(add, 0));

function add (a, b) {
    return a + b;
}

console.log(sum);
console.log(array);
