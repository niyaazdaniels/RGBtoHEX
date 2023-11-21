function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function convert() {
    let input = document.querySelector('#input').value;
    let values = input.split(',').map(val => parseInt(val));
    let output = document.querySelector('#output');

    if (values.length === 3 && values.every(val => val >= 0 && val <= 255)) {
        let hexColor = rgbToHex(values[0], values[1], values[2]);
        output.textContent = hexColor;
    } else {
        output.textContent = ' Enter 3 comma-separated values (0-255).';
    }
}

let btn = document.querySelector('#convert').addEventListener('click', convert);