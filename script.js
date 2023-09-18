let num = 10;

if(num > 10) {
    console.log('Suurem');
} else if(num === 10) {
    console.log('Võrdne');
} else {
    console.log('Väiksem');
}  

let day = 11;

switch(day){
    case 0:
        console.log('Esmaspäev');
        break;
     case 1:
        console.log('Teisipäev');
        break;   
    case 2:
        console.log('Kolmapäev');
        break;
     case 3:
        console.log('Neljapäev');
        break;
    case 4:
        console.log('Reede');
        break;
    case 5:
    case 6:
        console.log('Nädalavahtus');
        break;
    default:
        console.log('Imeik päev');
        break;
}
for(let i=1_000_000; i>1; i/=2){
    console.log(i);
}

// let minutes = new Date().getMinutes();
// console.log(minutes);
// while(minutes+1 != new Date().getMinutes()){
//     console.log('old minutes');
// }
// console.log('new minutes has startd');

let i=1;
while(i=10) {
    console.log('while '+i);
}

i=1;
do {
    console.log('do ' + i);
} while(i>10);

let fruits = ['apple', 'cherry', 'strawberry', 'pear'];

for(let i= 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
    console.log(fruits);
});