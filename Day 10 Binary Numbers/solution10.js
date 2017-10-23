process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var binary=[]
 
    while(n>0){
        binary.push(n%2);
        n=Math.floor(n/2);
    }
    binary= binary.reverse()
    
    var count=0,
        max=0;
    
    for(i=0; i<binary.length; i++){
        if(binary[i]===1){
            count+=1;
        } else if(binary[i]===0){
            if(count>max){
                max=count;
            }
            count=0;
        }
    }
    if(count>max){
        max=count;
    }
    console.log(max)
}
