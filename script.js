document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const asimInput = document.getElementById('asimInput');
    const asimTableBody = document.getElementById('asimTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const asimValue = asimInput.value.trim();

        if (asimValue !== '') {
            const asimValuesArray = asimValue.split(/,|\s/).map(value => value.trim());
            
            for (const value of asimValuesArray) {
                if (value !== '') {
                    const newRow = asimTableBody.insertRow();
                    const newCell = newRow.insertCell(0);
                    newCell.textContent = value;
                }
            }
            asimInput.value = '';
        } else {
            alert('Please enter a reference before clicking Insert.');
        }
    });
});
