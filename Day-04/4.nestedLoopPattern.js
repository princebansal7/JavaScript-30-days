/*

*
**
***
****
*****

*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*"); // doesn't move the cursor to next line  and prints string
    }
    console.log();
}
