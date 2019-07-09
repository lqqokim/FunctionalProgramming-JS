/**
 * @desc 절차지향 코드를 함수형 코드롤 변환하면서 특징을 알아본다.
 */

var users = [
    {   id: 1, name: 'ID', age: 32},
    {   id: 2, name: 'ID2', age: 31},
    {   id: 3, name: 'ID3', age: 33},
    {   id: 4, name: 'ID4', age: 22},
    {   id: 5, name: 'ID5', age: 25},
    {   id: 6, name: 'ID6', age: 12},
    {   id: 7, name: 'ID7', age: 30},
];

function filter(list, predicate) {
    var new_list = [];
    for(var i = 0, len = list.length; i < len; i++) {
        if(predicate(list[i])) new_list.push(list[i]);
    }

    return new_list;
}

function map(list, iteratee) {
    var new_list = [];
    for(var i = 0, len = list.length; i < len; i++) {
        new_list.push(iteratee(list[i]));
    }

    return new_list;
}

//1
var users_under_30 = filter(users, function(user) {
    return user.age < 30;
});
console.log(users_under_30.length);

//2
var ages = map(users_under_30, function(user) {
    return user.age;
})
console.log(ages);

//3
var users_over_30 = filter(users, function(user) {
    return user.age >= 30;
});
console.log(users_over_30.length);

//4
var names = map(users_over_30, function(user) {
    return user.name;
})
console.log(names);

// //1
// var temp_users = [];
// for(var i = 0, len = users.length; i < len; i++) {
//     if(users[i].age < 30) temp_users.push(users[i]);
// }
// console.log(temp_users.length);

// //2
// var ages = [];
// for(var i = 0, len = temp_users.length; i < len; i++) {
//     ages.push(temp_users[i].age);
// }
// console.log(ages);

// //3
// var temp_users = [];
// for(var i = 0, len = users.length; i < len; i++) {
//     if(users[i].age >= 30) temp_users.push(users[i]);
// }
// console.log(temp_users.length);

// //4
// var names = [];
// for(var i = 0, len = temp_users.length; i < len; i++) {
//     names.push(temp_users[i].name);
// }
// console.log(names);