const baseURl = 'https://api.airvisual.com/v2/city?';
const key = 'c3606135-b947-439f-8e8b-57ce6253a66a';
const button = document.getElementById('fetchbutton');
button.addEventListener('click', fetchData)

function fetchData(e) {
    e.preventDefault()
    url = `${baseURl}city=Indianapolis&state=Indiana&country=USA&key=${key}`
    fetch(url)
        .then(result => result.json())
        .then(jsonified => displayData(jsonified));
}

function displayData(jsonified) {
    console.log(jsonified);
    let hu=document.getElementById("hu")
    humidity = jsonified.data.current.weather.hu;
    hu.innerHTML = hu.innerHTML+ (`${humidity}`);
    let pr=document.getElementById("pr")
    precipitation = jsonified.data.current.weather.pr
    pr.innerHTML = pr.innerHTML+ (`${precipitation}`)
    let ws=document.getElementById("ws")
    windshear = jsonified.data.current.weather.ws;
    ws.innerHTML = ws.innerHTML+ (`${windshear}`)
    let aq=document.getElementById("aq")
    let aqicn = jsonified.data.current.pollution.aqicn;
    aq.innerHTML = aq.innerHTML+ (`${aqicn}`);
    let aqius=document.getElementById("aqius")
    let aqiusData = jsonified.data.current.pollution.aqius;
    aqius.innerHTML = aqius.innerHTML+ (`${aqiusData}`);
}



