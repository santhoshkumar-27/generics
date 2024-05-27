// as far we don't mentions a type so its by default any
function convertIntoArray<T>(input: T): T[] { // T --> Type parameter
    // now this function converted into the generic functions because it accepts type as parameter, where it invoked
    return [input];
}

const inlineFunction = <T>(input: T): T[] => [input];

// muliple Parameter generice Types
function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
    return [input1, input2];
}

const inlineArrayPair = <T, K>(input1: T, input2: K): [T, K] => [input1, input2];

convertIntoArray('string'); // string
convertIntoArray(0); // number
convertIntoArray(false); // boolean
convertIntoArray([]); // Array
convertIntoArray({}); // Object
convertIntoArray({}); // custom something