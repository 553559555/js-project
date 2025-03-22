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


// function add(){
//     function test(){
//         function delete1() {
//             return 20;
//         }
//         return delete1();
//     }
//     return test();
// }

// const v = add();
// console.log(v);


// let userName = "张三";

// console.log(userName);


let arr = [

    {

        id: 12334,

        isChecked: 1, // 1表示购物车选中了这个产品

        cartPrice: 5999, // 表示产品单价5999

        skuNum: 1, // 表示购物车产品数量为1

        skuName: "小米10 至尊纪念版 双模5G 骁龙865 120W快充 8GB+128GB 陶瓷黑 游戏手机",

    },

    {

        id: 12375,

        isChecked: 0, // 0表示购物车没有选中这个产品

        cartPrice: 2323, // 表示产品单价为2323

        skuNum: 1, // 表示购物车产品数量为1

        skuName: "华为P40 5G全网通智能手机 支持鸿蒙HarmonyOS 零度白 8G+128G",

    },

    {

        id: 12376,

        isChecked: 1, // 1表示购物车选中了这个产品

        cartPrice: 8197, // 表示产品单价为8197

        skuNum: 1, // 表示购物车产品数量为1

        skuName: "Apple iPhone 12 (A2404) 64GB 黑色 支持移动联通电信5G 双卡双待手机",

    },

]


// let num = arr.reduce((a,b) => {
//     return a + b.isChecked
// },0)

// let price = arr.reduce((a, b) => {
//     return a + b.isChecked * b.cartPrice * b.skuNum
// }, 0)

let newArr = arr.filter(item => {
    return item.isChecked
})

console.log(newArr)