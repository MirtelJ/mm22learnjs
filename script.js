function hello(){
    console.log('hello1');
}
let hello2 = function(){
    console.log('hello2');
}

let hello3 = () => {
    console.log('hello3');
}

let hello4 = () => console.log('hello4');

hello();
hello2();
hello3();
hello4();

let person = {
    name: 'Kaspar',
    age: '30',
    describe(){
        console.log(this);
        console.log('name:' + this.name + 'age' + this.age);
    },
    describe2: () => {
        console.log(this);
        console.log('name:' + this.name + 'age' + this.age);
    },
    describe3: function () {
        console.log(this);
        console.log('name:' + this.name + 'age' + this.age);
    }
}

person.name = 'Martin';
person.age = 33;

person.describe();
person.describe2();
person.describe3();