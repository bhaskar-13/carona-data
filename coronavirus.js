//html dom element
document.body.innerHTML = ` <header class="header">Covid-19 details of all the countries</header>
                            <div class="globalcontainer">
                            </div>
                            `
//get the data using fetch
    async function getData() {
    const data = await fetch("https://api.covid19api.com/summary");
    const users = await data.json();
    const global = document.querySelector(".globalcontainer");
    for (i = 0; i < users.Countries.length; i++) {
        global.innerHTML += `
                             <div class="innercont1"><p>Country Name:${users.Countries[i].Country}</p>
                             <p>Total ConfirmedCase:${users.Countries[i].TotalConfirmed}</p>
                             <p>New Deaths:${users.Countries[i].NewDeaths}</p>
                             <p>Total Deaths:${users.Countries[i].TotalDeaths}</p>
                             <p>New Recovered:${users.Countries[i].NewRecovered}</p>
                             <p>Total Recovered:${users.Countries[i].TotalRecovered}</p>
                           </div>`
}
}

getData();



                          
