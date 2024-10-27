const countriesContainer = document.getElementById("flags-container")

async function fetchCountries(){
try{
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    

    data.forEach ( country=>{
        const countryDivParent = document.createElement('div')
        countryDivParent.classList.add('country')

        const flagImage = documment.createElement('img')
        flagImage.src = country.flags.png
        flagImage.alt = country.flags.alt

        const flagName = document.createElement('h1')
        flagName.textContent = country.name.common

        countryDivParent.appendChild(flagImage)
        countryDivParent.appendChild(flagName)

        countriesContainer.appendChild(countryDivParent)
    })   
}
catch(error){
    console.error('Error fetching flags', error)
}
}

fetchCountries()