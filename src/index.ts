// Accepts any number of parameters as command line arguments.
// Each parameter should be of the form <number><string> where    and <string> is a lower case string composed of the characters from a to z with length of at least 1.

// TypeScript Type: Alphabet
type Alphabet = 'abcdefghijklmnopqrstuvwxyz'

//
const dataIteration = (text: string, amount: number) => {
    // Alphabet
    const alphabet: Alphabet = 'abcdefghijklmnopqrstuvwxyz'

    // Encoded Text
    let encodedText: string = ''

    let i: number = 0
    while (i < text.length) {
        // Valid Alphabet Characters
        if (alphabet.indexOf(text[i]) !== -1) {
            // Find Alphabet Index
            const alphabetIndex: number = alphabet.indexOf(
                text[i].toLowerCase()
            )

            // Alphabet Index Is In Alphabet Range
            if (alphabet[alphabetIndex + amount]) {
                // Append To String
                encodedText += alphabet[alphabetIndex + amount]
            }
            // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
            else {
                // Append To String
                encodedText += alphabet[alphabetIndex + amount - 26]
            }
        }
        // Special Characters
        else {
            // Append To String
            encodedText += text[i]
        }

        // Increase I
        i++
    }
    console.log('Encoded :', encodedText)
    return encodedText
}

const charPositionsModifier = (...args: string[]): string | void => {
    let amount: number
    let text: string
    let containsWhiteSpace: boolean = false
    let stringArray = new Array()
    let result: string[] = []

    args.map((el) => {
        // remove spaces
        // Find if there is a space than split the variables space
        if (el.indexOf(' ') >= 0) {
            containsWhiteSpace = true
            stringArray = el.split(/(\s+)/)

            for (let i = 0; i < stringArray.length; i++) {
                //ignore spaces
                if (stringArray[i] != ' ') {
                    // validate if number is 0 to 9
                    if (stringArray[i].charAt(0).match(/[0-9]/)) {
                        amount = Number(stringArray[i].charAt(0).match(/[0-9]/))
                        console.log('Amount: ', amount)
                        console.log('stringArray: ', stringArray[i])

                        // Adjust Shift (Over 26 Characters)
                        if (amount > 26) {
                            // Assign Remainder As Shift
                            amount = amount % 26
                        }

                        //Remove first letter
                        text = stringArray[i].substring(1)
                        console.log('text: ', text)

                        // Iterate Over Data
                        dataIteration(stringArray[i], amount)
                    }
                }
            }
        }

        // validate if number is 0 to 9
        if (el.charAt(0).match(/[0-9]/)) {
            amount = Number(el.charAt(0).match(/[0-9]/))

            // Adjust Shift (Over 26 Characters)
            if (amount > 26) {
                // Assign Remainder As Shift
                amount = amount % 26
            }

            //Remove first letter
            text = el.substring(1)

            // Iterate Over Data
            console.log('Result', dataIteration(text, amount))
        }
    })
}

const exampleOne = '0apple'
const exampleTwo = '1lzru'
const exampleThree = '8hello 5zoo'
const exampleFour = 'p0986'

charPositionsModifier(exampleOne)
charPositionsModifier(exampleTwo)
charPositionsModifier(exampleThree)
charPositionsModifier(exampleFour)
// charPositionsModifier(exampleOne, exampleTwo, exampleThree)
// charPositionsModifier(exampleOne, exampleTwo, exampleThree, exampleFour)
