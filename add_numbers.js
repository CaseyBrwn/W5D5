
const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function addNumbers(sum, numsLeft, cb) {
    if (numsLeft > 0) {
        reader.question('What number do you what to put in? ', answer => {
            sum += parseInt(answer);

            console.log(sum);
            addNumbers(sum, numsLeft - 1, cb);

        });
    } else {
        console.log(cb(sum));
        // reader.close();
    }


}
function square(num){
    return num * num;
}


addNumbers(0, 3, square);