const colorSelector = document.getElementById('color-selector') as HTMLInputElement;

colorSelector.addEventListener('input', () => {
    const selectedColor = colorSelector.value;
});
export {};