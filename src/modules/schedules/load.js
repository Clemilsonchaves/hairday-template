import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

const selectedDate = document.getElementById("date")
export async function schedulesDay() {

  const date = selectedDate.value

  //Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })


 // Exibe os agendamentos
  schedulesShow({dailySchedules})
  
 
  hoursLoad({ date, dailySchedules }) 
  
}