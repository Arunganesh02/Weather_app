const input = document.querySelector("#inputField")
const submitbtn = document.querySelector("#submit")

async function getDetails(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=WK895HEB2QRJMCT99CLHKVVTP`
    const data = await fetch(url,{mode:'cors'})
    const jsondata = await data.json()
    const div = document.querySelector("#showData")
    div.innerHTML = ''
    console.log(jsondata)
    jsondata.days.forEach((day)=>{
        const content = `        
        <div>
        <hr>
        <p>Date:${day.datetime}</p>
        <p>Conditions:${day.conditions}</p>
        <p>Temperature : ${day.temp}</p>
        <p>MinTemperature : ${day.tempmin}</p>
        <p>MaxTemperature : ${day.tempmax}</p>
</div>
        `
    div.innerHTML += content
    })
    // return jsondata
}


submitbtn.addEventListener("click",()=>{

    getDetails(input.value)
    const div = document.querySelector('.displaylocation')
    const content = `
    <h1>${input.value}</h1>`
    div.innerHTML = content
    input.value = ''
})