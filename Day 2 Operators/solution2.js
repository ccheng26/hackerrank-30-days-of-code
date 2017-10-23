/* IDE processing
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
End IDE processing*/
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

    // Reads complete line from STDIN
    function readLine() {
        return input_stdin_array[input_currentline++];
    }

    function main(input) {
        //enter your processing code here
        var mealCost = Number(readLine(input))
        var tip = Number((readLine(input)/100)*mealCost)
        var tax = Number((readLine(input)/100)*mealCost)

        var totalCost = Math.round(mealCost+tip+tax)
        //To output the processed data use console.log(your stuffs here);
        console.log("The total meal cost is " + totalCost + " dollars.")
    }
/*
}
*/