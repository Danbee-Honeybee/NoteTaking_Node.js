function run(){
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');

//이벤트 루프 - 호출스택 - 태스크 큐