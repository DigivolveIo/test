// Accepts any number of parameters as command line arguments.
// Each parameter should be of the form <number><string> where    and <string> is a lower case string composed of the characters from a to z with length of at least 1.

// typeScript type: alphabet
type Alphabet = 'abcdefghijklmnopqrstuvwxyz'

// this shifts the letters
const dataIteration = (text: string, amount: number) => {
    const alphabet: Alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let encodedText: string = ''
    let i: number = 0

    while (i < text.length) {
        // valid alphabet characters
        if (alphabet.indexOf(text[i]) !== -1) {
            // find alphabet index
            const alphabetIndex: number = alphabet.indexOf(
                text[i].toLowerCase()
            )
            // alphabet index is in alphabet range
            if (alphabet[alphabetIndex + amount]) {
                // append to string
                encodedText += alphabet[alphabetIndex + amount]
            }
            // alphabet index out of range (adjust alphabet by 26 characters)
            else {
                // append to string
                encodedText += alphabet[alphabetIndex + amount - 26]
            }
        }
        // special characters
        else {
            // append to string
            encodedText += text[i]
        }
        // increase i
        i++
    }
    // console.log('Encoded :', encodedText)
    return encodedText
}

interface TextNumObj {
    text: string
    amount: number
}

//this gets the text and the number
let getTextAndNumber = (el: string): TextNumObj => {
    let amount: number
    let text: string

    // get number
    amount = Number(el.charAt(0).match(/[0-9]/))
    // adjust shift (over 26 characters)
    if (amount > 26) {
        // assign remainder as shift
        amount = amount % 26
    }
    //remove first letter
    text = el.substring(1)
    return { text, amount }
}

const charPositionsModifier = (...args: string[]): string | void => {
    let containsWhiteSpace: boolean = false
    let stringArray = new Array()
    let tempString: string
    let result: string
    let firstIteration: boolean = true
    let textNumObj: TextNumObj

    args.map((el) => {
        // Make sure it's not just space
        if (el.trim().length) {
            // PATH 1
            // find if there is a whitespace (more than one word)
            if (el.indexOf(' ') >= 0) {
                containsWhiteSpace = true
                // split into an array
                stringArray = el.split(/(\s+)/)

                for (let i = 0; i < stringArray.length; i++) {
                    //ignore spaces
                    if (stringArray[i] != ' ') {
                        // validate if first number is 0 to 9
                        if (stringArray[i].charAt(0).match(/[0-9]/)) {
                            // get the text and number
                            textNumObj = getTextAndNumber(stringArray[i])
                            // iterate over data
                            tempString = dataIteration(
                                textNumObj.text,
                                textNumObj.amount
                            )

                            // verify if it's the first iteration
                            if (firstIteration) {
                                // assign the first word
                                result = tempString
                                // set first iteration to false
                                firstIteration = false
                            } else {
                                // append to existing string
                                result += ` ${tempString}`
                            }
                        }
                    }
                }
                // return this
                console.log(result)
            }

            // PATH 2
            // validate if first number is 0 to 9 and does not contain white spaces
            if (el.charAt(0).match(/[0-9]/) && !containsWhiteSpace) {
                // get the text and number
                textNumObj = getTextAndNumber(el)
                // iterate over data
                result = dataIteration(textNumObj.text, textNumObj.amount)
                // return this
                console.log(result)
            }
        }
    })
}

const exampleOne = '0apple'
const exampleTwo = '1lzru'
const exampleThree = '8hello 5zoo'
const exampleFour = '8hello 5zoo 5zoo'
const exampleFive = 'p0986'
const exampleSix = ' '

charPositionsModifier(exampleOne)
charPositionsModifier(exampleTwo)
charPositionsModifier(exampleThree)
// tests two spaces
//charPositionsModifier(exampleFour)
// tests letter first
//charPositionsModifier(exampleFive)
// tests empty space
//charPositionsModifier(exampleSix)
// charPositionsModifier(
//     exampleOne,
//     exampleTwo,
//     exampleThree,
//     exampleFour,
//     exampleFive,
//     exampleSix
// )
