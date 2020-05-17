Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};



export function Diary(id,day, date) {
    this.diaryModal = document.querySelector('[data-add-diary-modal]');
    this.day = day ;
    this.date = date;
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
        <p class="text-lg p-5 text-gray-700 h-32 truncate" data-diary-body >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam id tempora officia incidunt a suscipit deserunt, quam maxime praesentium delectus dolorem repellat sapiente dolor amet, sunt consequuntur sed minus.
        </p>
    </div>
  </div>
    `;

    this.showTemplate = `
    <div data-show-diary-template class="show-diary transition ease-in duration-300 opacity-0 invisible ">
    <div class="w-screen h-screen  fixed top-0 left-0 flex items-center justify-center">
      <div class="bg-black opacity-75 w-full h-full absolute z-0"></div>
      <div class="diary-model w-full opacity-100 z-10 mx-4">
          <div class="container mx-auto ">
              <div class="bg-white p-5 rounded-lg">
                  <div class="diary-head flex-wrap  py-4 my-2 border-dashed  border-b-4  border-blue-500 flex items-center justify-between px-3 py-2">
                      <div class="diary-day">
                          <h2 data-diary-day class="text-blue-500 text-4xl font-bold">Friday</h2>
                      </div>
                      <div class="diary-status my-3">
                        <span data-diary-status class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">#Happy</span>				
                      </div>
                      <div class="diary-date">
                          <h2 data-diary-date class="text-blue-500 font-bold text-2xl">5/6/2020 </h2>
                      </div>
                  </div>
                  <div class="diary-body my-3">
                      <div data-diary-body class="shadow h-64 overflow-y-auto appearance-none border rounded w-full py-2 px-3  bg-blue-500 text-white font-bold text-xl  leading-8 focus:outline-none " style="height: 400px;"></div>
                  </div>
                  <div class="diary-save">
                      <button data-edit-diary  class="bg-green-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" >Edit</button>
                      <button data-close-diary-template class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
</div>
    `;

    this.add = (container,  body = '', status = '') => {
        // const diaryId = new Date().toLocaleDateString().replace(/\//g, '')
        const diaryChild = document.createElement('div')
        diaryChild.innerHTML = this.template;
        const diaryBody = diaryChild.querySelector('[data-diary-body]');
        const diaryStatus = diaryChild.querySelector('[data-diary-status]');
        diaryStatus.textContent = status;
        diaryChild.dataset.id = id;
        diaryBody.innerHTML = body;
        container.appendChild(diaryChild);
        diaryChild.addEventListener('click', () => this.open(body, this.day, status, this.date))
    }


    this.open = (body, day, status, date) => {
            const diaryTempalte = document.createElement('div');
            diaryTempalte.innerHTML = this.showTemplate;
            const closeDiary = diaryTempalte.querySelector('[data-close-diary-template]');
            const diaryStatus = diaryTempalte.querySelector('[data-diary-status]')
            const diaryDay = diaryTempalte.querySelector('[data-diary-day]')
            const diaryDate = diaryTempalte.querySelector('[data-diary-date]')
            const diaryBody = diaryTempalte.querySelector('[data-diary-body]')
            diaryBody.innerHTML = body;
            diaryStatus.textContent = status;
            diaryDay.textContent = day;
            diaryDate.textContent = date;
            document.querySelector('body').appendChild(diaryTempalte);
            diaryTempalte.children[0].classList.remove('invisible')
            diaryTempalte.children[0].classList.remove('opacity-0')
            closeDiary.addEventListener('click', function() {
                diaryTempalte.children[0].classList.add('invisible')
                diaryTempalte.children[0].classList.add('opacity-0')
            })
    }


    this.close = () => {
            this.diaryModal.classList.add('invisible')
            this.diaryModal.classList.add('opacity-0')
    }

}