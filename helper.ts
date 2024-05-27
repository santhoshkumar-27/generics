// as far we don't mentions a type so its by default any
function convertIntoArray<T>(input: T): T[] { // --> Type parameter
    // now this function converted into the generic functions because it accepts type as parameter, where it invoked
    return [input];
}

convertIntoArray('string'); // string
convertIntoArray(0); // number
convertIntoArray(false); // boolean
convertIntoArray([]); // Array
convertIntoArray({}); // Object
convertIntoArray({}); // custom something