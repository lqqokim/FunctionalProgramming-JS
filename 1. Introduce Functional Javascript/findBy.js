/**
 * @desc User객체의 메서드로 값을 얻어야 하는 경우 함수형 처리
 */

function User(id, name, age) {
    this.getId = function () {
        return id;
    };
    this.getName = function () {
        return name;
    };
    this.getAge = function () {
        return age;
    };
}

var users = [
    { id: 1, name: 'ID', age: 32 },
    { id: 2, name: 'ID2', age: 31 },
    { id: 3, name: 'ID3', age: 33 },
    { id: 4, name: 'ID4', age: 22 },
    { id: 5, name: 'ID5', age: 25 },
    { id: 6, name: 'ID6', age: 12 },
    { id: 7, name: 'ID7', age: 30 },
];

var users2 = [
    new User(1, 'ID', 30),
    new User(2, 'ID2', 22),
    new User(3, 'ID3', 12),
    new User(4, 'ID4', 35),
    new User(5, 'ID5', 37),
    new User(6, 'ID6', 30),
    new User(7, 'ID7', 27),
];

function findBy(list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) return list[i];
    }
}

var user = findBy(users2, function (u) {
    return u.getAge < 30;
}).getName();

var users = findBy(users, function (u) {
    return u.age == 32 && u.name == 'JM';
});