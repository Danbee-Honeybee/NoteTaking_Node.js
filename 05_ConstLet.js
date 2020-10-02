const a = 1; //const, let 은 ({}) 밖에서는 사용 불가
const b = 2; //const 는 값 변경 불가능
let c = 3; //let 은 값 변경 가능
c = 4;
console.log(a + b + c);


var d;
const e=5; // const는 선언할때 값을 꼭 넣어줘야한다
const g = {a:1, b:2, c:3};
//g = [1,2,3];
g.a = 3; //완전히 값이 고정된건 아니고 객체는 값을 바꿀수 있다.
g.b = 5;
console.log(g);

const h=[1,2,3,4,5];
h[0]=true;
h[1]=false;
console.log(h);