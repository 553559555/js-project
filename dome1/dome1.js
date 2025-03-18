// var x = function(a,b) {
//     return a*b;
// }

// const c = x(4,3);
// console.log(c);


// function add() {
//     var counter = 0;
//     function plus() {counter += 1;}
//     plus();    
//     return counter; 
// }


// const a = add();

// console.log(a);


function add(){
    function test(){
        function delete1() {
            return 20;
        }
        return delete1();
    }
    return test();
}

const v = add();
console.log(v);



