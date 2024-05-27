// as far we don't mentions a type so its by default any
function convertIntoArray(input) {
    return [input];
}

convertIntoArray('string'); // string
convertIntoArray(0); // number
convertIntoArray(false); // boolean
convertIntoArray([]); // Array
convertIntoArray({}); // Object
convertIntoArray({}); // custom something