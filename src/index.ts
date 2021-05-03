// Hope you will enjoy reading this code
// Stay safe!

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
    let textNumObj: TextNumObj

    args.map((el) => {
        // Make sure it's not just space
        if (el.trim().length) {
            let pathTwoResult: string = ''
            let firstIteration: boolean = true
            let tempString: string
            let stringArray = new Array()

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
                            pathTwoResult = tempString
                            // set first iteration to false
                            firstIteration = false
                        } else {
                            // append to existing string
                            pathTwoResult += ` ${tempString}`
                        }
                    }
                }
            }
            // return this
            console.log(pathTwoResult)
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
// // tests two spaces
// charPositionsModifier(exampleFour)
// // tests letter first
// charPositionsModifier(exampleFive)
// // tests empty space
// charPositionsModifier(exampleSix)
// // tests multiple param
// charPositionsModifier(
//     exampleOne,
//     exampleTwo,
//     exampleThree,
//     exampleFour,
//     exampleFive,
//     exampleSix
// )
