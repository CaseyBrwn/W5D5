
const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// function pword(value) {
//     if (value === true){
//         console.log(true);
//     } else {
//         console.log(false);
//     }

// }
// askIfGreaterThan(1,2, pword)

function askIfGreaterThan(el1, el2, cb) {
    reader.question(`If this ${el1} is greater than this ${el2}, 'yes' or 'no'  `, result => {
        if (result === 'yes') {
            cb(true);
        } else {
            cb(false);
        }
        
    });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

    if (i === arr.length - 1) {
        
        outerBubbleSortLoop(madeAnySwaps);
    }else{
        askIfGreaterThan(arr[i], arr[i + 1], function (ind) {
            if (ind === true) {
                [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            } 
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        }); 
        
    }
}
// const test = [3, 2, 1];
// absurdBubbleSort(test, ){ 
//     console.log(test);
//     reader.close();
// });
// console.log(test);


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        
        if (madeAnySwaps === true) {
            // console.log('check')
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            // console.log('check2')
            sortCompletionCallback(arr);
        }
        
    }

    outerBubbleSortLoop(true)
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});