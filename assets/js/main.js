// get all elements

const openDiaryButton = document.querySelector('[data-open-diary-model]');
const addDiaryModal = document.querySelector('[data-add-diary-modal]')
const closeDiaryModal = document.querySelector('[data-close-diary-modal]');


openDiaryButton.addEventListener('click', function() {
    addDiaryModal.classList.remove('invisible')
    addDiaryModal.classList.remove('opacity-0')
})

closeDiaryModal.addEventListener('click', function() {
    addDiaryModal.classList.add('invisible')
    addDiaryModal.classList.add('opacity-0')
})