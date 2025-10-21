// // count total vowel and consonants in a word present in a string

function countcons(str) {
    let arr = Array.from(str);
    console.log("Array:", arr);

    let vowels = ["a", "e", "i", "o", "u"];
    let consCount = 0;

    for (const index in arr) {
        let char = arr[index].toLowerCase();
        if (!vowels.includes(char)) {
            consCount++; 
        }
    }

    return consCount;
}
function countvow(str) {
    let arr = Array.from(str);
    console.log("Array:", arr);

    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for (const index in arr) {
        let char = arr[index].toLowerCase();
        if (vowels.includes(char)) {
            vowelCount++; 
        }
    }

    return vowelCount;
}


console.log("vowel count:", countvow("gaurav"));
console.log("const count:", countcons("gaurav"));






//gpt solution






// function countVowelsAndConsonants(str) {
//     let arr = Array.from(str);
//     let vowels = ["a", "e", "i", "o", "u"];
//     let vowelCount = 0;
//     let consCount = 0;

//     for (const index in arr) {
//         let char = arr[index].toLowerCase();

//         // Check if character is an alphabet
//         if (char >= 'a' && char <= 'z') {
//             if (vowels.includes(char)) {
//                 vowelCount++;
//             } else {
//                 consCount++;
//             }
//         }
//     }

//     return { vowelCount, consCount };
// }

// const result = countVowelsAndConsonants("gaurrav");
// console.log(`Vowels: ${result.vowelCount}, Consonants: ${result.consCount}`);




// method 2  youtube

// function calculateVowelAndConsonants(inputString){
//     console.log(inputString);
//     inputString = inputString.toLowerCase();
//     inputString = inputString.replace(/ /g, '');
//     console.log("inputString after clean up is", inputString);
//     const vowels = "aeiou";
//     const consonants = "bcdfghjklmnpqrstvwxyz";

//     let vowelCount = 0;
//     let consonantCount = 0;
//     for(let i = 0; i < inputString.length; i++) {
//         if(vowels.includes(inputString[i])) {
//             vowelCount++;
//         }
//         //else if(consonants.includes(inputString[i])) {
//         else if(/^[a-z]$/.test(inputString[i])) {
//             consonantCount++;
//         }
//         else {
//             console.log(inputString[i], "Is neither vowel nor consonant");
//         }
//     }

//     return { vowelCount, consonantCount };
// }

// console.log("Hello World", calculateVowelAndConsonants("Hello World"));
