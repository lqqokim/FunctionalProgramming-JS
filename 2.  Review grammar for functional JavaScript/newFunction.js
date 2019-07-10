/**
 * @desc new function을 활용하여 죽시 실행이 가능하다.
 */

new function() {
    console.log(this); // {}
};

/**
 * @desc new function을 활용하여 객체 생성도 가능하다.
 */

var pj = new function () {
    this.name = 'PJ';
    this.age = 20;
    this.constructor.prototype.hi = function() {
        console.log('h1');
    }
};

console.log(pj);
pj.hi();

/**
 * @desc 함수를 정의하는 new Function
 */

var a = eval('10 + 5');
console.log(a);

var add = new Function('a, b', 'return a + b;');
add(10, 5);