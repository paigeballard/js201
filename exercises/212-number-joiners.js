// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
// function numberJoinerWhile (start, end) {
//     let text = "";
//     var i = start;
//     while (i<end) {
//         text += "_" + i;
//         i++;
//     } console.log(text);
// }
// numberJoinerWhile(1, 1);
function numberJoinerWhile(start, end) {
    let text = start.toString();
    var i = start + 1;
    while (i <= end) {
        text += "_" + i;
        i++;
    } 
    console.log(text);
} 
numberJoinerWhile(1, 10);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor(start, end) {
    let text = start.toString();
    for ( var i = start + 1; i <= end; i++) {
        text += "_" + i;
    }
    console.log(text);
}
numberJoinerFor(1, 1);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy(start, end, fun) {
    let text = start.toString();
    let strg = fun;
    for ( var i = start + 1; i <= end; i++) {
        text += strg + i;
    }
    console.log(text);
}
numberJoinerFancy(1, 10, "****");

