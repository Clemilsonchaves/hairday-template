import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay( { date } ) {

  try {
   // Faz a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Converte a resposta de texto para um objeto JavaScript.
    const data = await response.json()

    // Filtra os agendamentos do dia especificado.
    const dailySchedules = data.filter((schedule) =>
       dayjs(date).isSame(schedule.when, "day") 
  )

   return dailySchedules

  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}