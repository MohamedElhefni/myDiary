import { Diary } from './Diary.js';
// get all elements
const openDiaryButton = document.querySelector('[data-open-diary-model]');
const addDiaryModal = document.querySelector('[data-add-diary-modal]')
const closeDiaryModal = document.querySelector('[data-close-diary-modal]');
const saveDiary = document.querySelector('[data-save-diary]')
const diaryBody = document.querySelector('[data-diary-body]')
const diaryStatus = document.querySelector('[data-status]')
const diaryContainer = document.querySelector('.diary-cards')



openDiaryButton.addEventListener('click', function() {
    addDiaryModal.classList.remove('invisible')
    addDiaryModal.classList.remove('opacity-0')
})

closeDiaryModal.addEventListener('click', function() {
    addDiaryModal.classList.add('invisible')
    addDiaryModal.classList.add('opacity-0')
})




let diary = new Diary();
saveDiary.addEventListener('click', function()  {
    const body = diaryBody.value;
    const status = diaryStatus.value
    diary.add(diaryContainer, body, status)
    diary.close();
})
