import dayjs from "dayjs"

const form = document.querySelector("form") 
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar a data atual e define a data minima como sendo a data atual  
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit =(event) => {
  // Previne o comportamento padão de carregar a página
  event.preventDefault()

  try {
   // Recuperando o nome do cliente.
   const name = clientName.value.trim()

   if (!name) {
    return alert("Informe o nome do cliente!")
   }

   // Recupera o horário selecionado
   const hourSelected = document.querySelector(".hour-selected")
  
   // Recupera somente a hora.
   if (!hourSelected) {
    return alert("Selecione a hora.")
   }
  

   // Recuperar somente a hora.
   const [ hour ] = hourSelected.innerText.split(":")
   console.log(hour)

   // Inserir a hora na data
   const when = dayjs(selectedDate.value).add(hour, "hour")
   console.log(when)

   // Gera um ID 
   const id = new Date().getTime({
    id,
    name,
    when,
   }) 
   

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
  
}
  