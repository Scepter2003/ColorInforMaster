const colorInput = document.getElementById('color-input');
const hexValue = document.getElementById('hex-value');
const rgbValue = document.getElementById('rgb-value');
const rgbaValue = document.getElementById('rgba-value');
const body = document.body;

colorInput.addEventListener('input', updateColorInfo);

function updateColorInfo() {
    const selectedColor = colorInput.value;
    
    hexValue.textContent = selectedColor;
    
    const rgbArray = hexToRgb(selectedColor);
    rgbValue.textContent = `${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}`;

    const rgbaArray = [...rgbArray, 1]; // Adding 1 for the alpha channel
    rgbaValue.textContent = `${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${rgbaArray[3]}`;

    // To change the body background color  to selected color
    body.style.backgroundColor = selectedColor;
}

function hexToRgb(hex) {
    // To Remove the leading '#' if present
    hex = hex.replace(/^#/, '');

    // Parse the hex values for red, green, and blue
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
}
