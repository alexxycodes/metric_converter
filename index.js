/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl = document.getElementById("btn_el")
const inputEl = document.getElementById("input_el")
const lenCov = document.getElementById("len_cov")
const massCov = document.getElementById("mass_cov")
const volCov = document.getElementById("vol_cov")

btnEl.addEventListener("click", function() {
  let num = inputEl.value
  let meter2feet = (num * 3.281).toFixed(3)
  let feet2meter = (num / 3.281).toFixed(3)
  let kg2pds = (num * 2.204).toFixed(3)
  let pds2kg = (num / 2.204).toFixed(3)
  let ltr2gl = (num * 0.264).toFixed(3)
  let gl2ltr = (num / 0.264).toFixed(3)
  let response1 = `${num} meters = ${meter2feet} feet | ${num} feet = ${feet2meter} meters`
  let response2 = `${num} liters = ${ltr2gl} gallons | ${num} gallos = ${gl2ltr} liters`
  let response3 = `${num} kilograms = ${kg2pds} pounds | ${num} pounds = ${pds2kg} kilograms`
  lenCov.textContent = response1
  volCov.textContent = response2
  massCov.textContent = response3
})