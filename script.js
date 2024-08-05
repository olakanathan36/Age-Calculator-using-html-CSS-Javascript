
const ageForm = document.getElementById('age-form');
const birthDateInput = document.getElementById('birth-date');
const ageOutput = document.getElementById('age-output');

ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const birthDate = new Date(birthDateInput.value);
    const today = new Date();
    const age = calculateAge(birthDate, today);
    ageOutput.textContent = `You are ${age} years old.`;
});

function calculateAge(birthDate, today) {
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
