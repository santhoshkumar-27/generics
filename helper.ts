// as far we don't mentions a type so its by default any
function convertIntoArray<T>(input: T): T[] { // T --> Type parameter
    // now this function converted into the generic functions because it accepts type as parameter, where it invoked
    return [input];
}

const inlineFunction = <T>(input: T): T[] => [input];

// muliple Parameter generice Types
function createArrayPair<T extends string | number, K>(input1: T, input2: K): [T, K] {
    return [input1, input2];
}

// we can restrict type using extends only accept these value

const inlineArrayPair = <T, K>(input1: T, input2: K): [T, K] => [input1, input2];

convertIntoArray('string'); // string
convertIntoArray(0); // number
convertIntoArray(false); // boolean
convertIntoArray([]); // Array
convertIntoArray({}); // Object
convertIntoArray({}); // custom something


type Props<T> = {
    themeOptions: T[],
    selectedTheme: T
}


interface InnerProps<T> {
    themeOptions: T[],
    selectedTheme: T
}


let data: Props<string>;
let data1: InnerProps<string>;