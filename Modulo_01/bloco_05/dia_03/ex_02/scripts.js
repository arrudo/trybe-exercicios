function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
 const daysContainer = document.querySelector("#days")

 //Ex_01 
 for(let i = 0; i < decemberDaysList.length; i += 1){
    const day = document.createElement("li")
    day.classList.add("day")
    day.innerText = decemberDaysList[i]
    if(parseInt(day.innerText) === 24 || parseInt(day.innerText) === 25 || parseInt(day.innerText) === 31 ){
        day.classList.add("holiday")
    }
    if(parseInt(day.innerText) === 4 || parseInt(day.innerText) === 11 || parseInt(day.innerText) === 18 || parseInt(day.innerText) === 25 ){
        day.classList.add("friday")
    }
    daysContainer.appendChild(day)
 }

//Ex_02
const buttonContainer = document.querySelector(".buttons-container")
const holidayButton = document.createElement("button")
function createHolidayButton(texto){
    holidayButton.setAttribute("id", "btn-holiday")
    holidayButton.innerText = texto
    buttonContainer.appendChild(holidayButton)
}

createHolidayButton("Feriados")
 
//Ex_03
const feriados = document.querySelectorAll(".holiday")
holidayButton.addEventListener("click", mouseClick)

function mouseClick(){
    
    feriados.style.color = "green"
}







