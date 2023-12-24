function findNaughtyStep(original, modified) {
    let charDifference;
    let charSmaller;

    if (original.length >= modified.length) {
        charDifference = original.split("");
        charSmaller = modified.split("");
    } else {
        charDifference = modified.split("");
        charSmaller = original.split("");
    }

    for (let i = 0; i < charDifference.length; i++) {
        if (charDifference[i] != charSmaller[i]) {
            return charDifference[i];
        }
    }
    return "";
}
