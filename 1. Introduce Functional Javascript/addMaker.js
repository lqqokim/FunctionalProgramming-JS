/**
 * @desc 함수로 함수를 리턴하는 기법
 */

function addMaker(a) {
    return function(b) {
        return a + b;
    }
}

addMaker(10)(5);

/**
 * @desc 값으로써의 함수와 클로저
 */

function addMaker(a) {
    return function(b) { // 클로저
        return a + b;
    }
}

var add5 = addMaker(5);
add5(3); // 8
add5(4); // 9

var add3 = addMaker(3);
add3(3); // 6
add3(4); // 7