import { Diary } from './Diary.js';
// get all elements
const openDiaryButton = document.querySelector('[data-open-diary-model]');
const addDiaryModal = document.querySelector('[data-add-diary-modal]')
const closeDiaryModal = document.querySelector('[data-close-diary-modal]');
const saveDiary = document.querySelector('[data-save-diary]')
const diaryBody = document.querySelector('[data-diary-body]')
const diaryStatus = document.querySelector('[data-status]')
const diaryContainer = document.querySelector('.diary-cards')
const dataBodyCounter = document.querySelector('[data-body-counter]');
const dataDay = document.querySelector('[data-day]')
const dataDate = document.querySelector('[data-date]')
const todayDate = new Date().toLocaleDateString();
const today = new Date().getDayOfWeek();
const LOCAL_STORAGE_DIARY_KEY = 'diaries'
let diaries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DIARY_KEY)) || [];
const todayId  = new Date().toLocaleDateString().replace(/\//g, '');
let isToday = false;

dataDay.textContent = today;
dataDate.textContent = todayDate;


openDiaryButton.addEventListener('click', function() {
    

    diaries.forEach(diary => {
        const diaryId = diary.date.replace(/\//g, '');
        if (todayId == diaryId) {
            diaryBody.value = diary.body;
            diaryStatus.value = diary.status;
            isToday = true;
        }else {
            diaryBody.value = '';
        }
    });
    
    
    addDiaryModal.classList.remove('invisible')
    addDiaryModal.classList.remove('opacity-0')
})

closeDiaryModal.addEventListener('click', function() {
    closeDiary();
})

diaryBody.addEventListener('input', function() {
    dataBodyCounter.textContent = diaryBody.value.length;
})

// let yesterday = new Date();
// yesterday.setDate(new Date().getDate()-1)

// let diaries = [
//     {
        
//         date:  yesterday.toLocaleDateString(),
//         day: yesterday.getDayOfWeek(),
//         body: 'lol',
//         status: 'happy'
//     }

// ]



saveDiary.addEventListener('click', function()  {
    if (isToday) {

        diaries.forEach(diary => {
            if (diary.id == todayId) {
                diary.body = diaryBody.value;
                diary.status = diaryStatus.value;
                saveAndRender();
                closeDiary();
            }
        })

    }else {
        const body = diaryBody.value.replace(/\n\r?/g, '<br />');
        const status = diaryStatus.value
        diaries.push(addDiary(body, status))
        diaryBody.value = '';
        saveAndRender();
        closeDiary();
    }
    // const id = new Date().toLocaleDateString().replace(/\//g, '');
    // let diary = new Diary(id, today, todayDate);
    // diary.add(diaryContainer, body, status)
    // diary.close();
})


function saveAndRender() {
    save();
    render();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_DIARY_KEY, JSON.stringify(diaries));
}

function render() {
    clearElement(diaryContainer)
    renderDiaries(diaries);
}

function renderDiaries(diaries) {
    diaries.map(diary => {
        const {id, day, date, body, status} = diary
        let dairyObj = new Diary(id,day, date);
        dairyObj.add(diaryContainer, body, status)
    })
    
}


function addDiary(body, status) {
    return {
        id: new Date().toLocaleDateString().replace(/\//g, ''),
        date:  new Date().toLocaleDateString(),
        day: new Date().getDayOfWeek(),
        body: body,
        status: status
    };
}


function closeDiary() {
    addDiaryModal.classList.add('invisible')
    addDiaryModal.classList.add('opacity-0')
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();