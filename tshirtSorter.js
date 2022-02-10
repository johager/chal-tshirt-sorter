/*
Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

>>> tshirtSorter('lms')
// sml

>>> tshirtSorter('smllms')
// ssmmll
*/

// Write your solution below:

// my solution

function tshirtSorter(str) {
    let s = ''
    let m = ''
    let l = ''
    for (let char of str) {
        switch(char) {
            case 's':
                s += 's'
                break
            case 'm':
                m += 'm'
                break
            case 'l':
                l += 'l'
                break
            default:
                break
        }
    }
    return s + m + l
}


// Michael Drummond's solution

const tshirtSorter2 = str => {
    // getting number of each character found in string
    let smshirts = str.split('s').length - 1;
    let medshirts = str.split('m').length - 1;
    let lrgshirts = str.split('l').length - 1;
    // new array variable to put letters ordered letters into
    const combinedArr = [];
    
    // loop adding the letter "s" as many times as it showed up in the string
    for(let i = 0; i < smshirts; i++) {
        combinedArr.push('s');
    }
    // loop adding the letter "m" as many times as it showed up in the string
    for(let i = 0; i < medshirts; i++) {
        combinedArr.push('m');
    }
    // loop adding the letter "l" as many times as it showed up in the string
    for(let i = 0; i < lrgshirts; i++) {
        combinedArr.push('l');
    }
    
    //returning the array joined back as a string
    return combinedArr.join('')
}

// console.log(tshirtSorter('lms'));
// console.log(tshirtSorter('smllms'));
// console.log(tshirtSorter('slsmmsllsmsmlmsls'));

// typical test function

function testTshirtSorter(inp, exp) {
    const res = tshirtSorter(inp)
    console.log("passed:", res === exp, `  inp: '${inp}', res: '${res}', exp: '${exp}'`)
}

// testTshirtSorter('lms','sml')
// testTshirtSorter('smllms','ssmmll')
// testTshirtSorter('slsmmsllsmsmlmsls','sssssssmmmmmlllll')

// Michael's suggested test function so can pass in the function to test instead of changing the function in the test

function test(func, inp, exp) {
    const res = func(inp)
    console.log("passed:", res === exp, `  inp: '${inp}', res: '${res}', exp: '${exp}'`)
}

test(tshirtSorter2,'lms','sml')
test(tshirtSorter2,'smllms','ssmmll')
test(tshirtSorter2,'slsmmsllsmsmlmsls','sssssssmmmmmlllll')