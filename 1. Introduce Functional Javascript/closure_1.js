/**
 * @desc 클로저는 자신이 생성될 때의 환경을 기억하는 함수다, => 클로저는 자신이 생성될 때의 스코프에서 알 수 있었던 변수를 기억하는 함수다.
 * - 자신의 상위 스코프에서 알 수 있는 변수를 사용하지 않는다면 클로저 함수가 아니다.
 * - 클로저가 기억할 환경이라는 것은 외부의 변수들밖에 없다.
 * - 그렇지 않다면 그 환경을 기억해야할 필요도 없다.
 * - 아래의 상위 스코프의 변수를 참조하는 두가지 예는 클로저이다.
 */

function parent() {
    var a = 5;
    function myFunc() {
        console.log(a);
    }
    //... 생략
}

function parent2() {
    var a = 5;
    function parent1() {
        function myFunc() {
            console.log(a);
        }
        //... 생략
    }
    //...생략
}
