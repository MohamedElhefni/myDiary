Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};



export function Diary() {
    this.diaryModal = document.querySelector('[data-add-diary-modal]');
    this.day = new Date().getDayOfWeek();
    this.date = new Date().toLocaleDateString();
    this.template = `
    <div class="diary-card border shadow-md rounded p-5 w-75 mx-auto  my-5 cursor-pointer hover:shadow-lg hover:bg-gray-200 ">
    <div class="diary-head  border-dashed  border-b-4  border-blue-500 flex items-center justify-between px-4 py-2">
        <div class="diary-day">
            <h2 class="text-blue-500 text-4xl font-bold"> ${this.day} </h2>
        </div>
        <div class="diary-status">
            <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2" data-diary-status >#happy </span>				
        </div>
        <div class="diary-date">
            <h2 class="text-blue-500 font-bold text-2xl"> ${this.date} </h2>
        </div>
    </div>
    <div class="diary-body">
        <p class="text-lg p-5 text-gray-700" data-diary-body >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam id tempora officia incidunt a suscipit deserunt, quam maxime praesentium delectus dolorem repellat sapiente dolor amet, sunt consequuntur sed minus.
        </p>
    </div>
  </div>
    `;

    this.add = (container, body = '', status = '') => {
        const diaryChild = document.createElement('div')
        diaryChild.innerHTML = this.template;
        const diaryBody = diaryChild.querySelector('[data-diary-body]');
        const diaryStatus = diaryChild.querySelector('[data-diary-status]');
        diaryStatus.textContent = status;
        diaryChild.dataset.id = Date.now().toString();
        diaryBody.textContent = body;
        container.appendChild(diaryChild);
    }


    this.open = () => {
            this.diaryModal.classList.remove('invisible')
            this.diaryModal.classList.remove('opacity-0')
    }


    this.close = () => {
            this.diaryModal.classList.add('invisible')
            this.diaryModal.classList.add('opacity-0')
    }

}