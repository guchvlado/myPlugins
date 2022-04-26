const input = document.querySelector('#phone');

input.addEventListener('input', (e) => {
    updateInput(e.target)
});

function updateInput(phone) {
    const x = phone.value.replace(/\D/g, '').substring(1); // get number exluding +7
    let mask = '+7 (___) ___-__-__'; // create mask
    for (let i = 0; i < x.length; i++) { // update mask / replace empty fields to past current numbers
    mask = mask.replace('_', x[i]);
    }
    phone.value = mask; // field change by received mask
    let pos = mask.indexOf('_'); // move cursor to next empty field/index
    phone.setSelectionRange(pos, pos);
}
updateInput(input); // documentLoaded update





// need
// if (e.inputType == 'deleteContentBackward') {
//     const pos = e.target.selectionStart - 1;
//     if (/\D/.test(e.target.value[pos]) && e.target.value[pos] != '_') {
//         e.target.value = e.target.value.substring(0, pos-1)
//     }
//     //e.target.setSelectionRange(pos, pos);
// }