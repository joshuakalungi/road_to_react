
// implementation of callback functions in js

function printText(text, fn){
    console.log("do something "+text);

    fn();
}

printText("now",function printThen(){
    console.log("do something then");
});