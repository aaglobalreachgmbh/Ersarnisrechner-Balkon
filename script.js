const slider = document.getElementById('capacity-slider');
const resultValue = document.getElementById('result-value');

function calculateSavings() {
    let capacity = slider.value;
    let savings;
    let solarModules;

    if (capacity === '1') {
        savings = 850;
        solarModules = 2;
    } else if (capacity === '2') {
        savings = 1400;
        solarModules = 3;
    } else {
        savings = 1750;
        solarModules = 3;
    }

    const savingsPerYear = savings * 0.4;

    resultValue.textContent = `Jährliche Ersparnis: ${savingsPerYear}€ bei ${capacity} kW Mikrowechselrichter`;
    localStorage.setItem('savingsPerYear', savingsPerYear);
    localStorage.setItem('capacity', capacity);
}

slider.addEventListener('input', calculateSavings);
calculateSavings();

const savedSavingsPerYear = localStorage.getItem('savingsPerYear');
const savedCapacity = localStorage.getItem('capacity');

if (savedSavingsPerYear && savedCapacity) {
    resultValue.textContent = `Zuletzt gespeicherte Ersparnis: ${savedSavingsPerYear}€ bei ${savedCapacity} kW Mikrowechselrichter`;
}
