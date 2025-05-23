 console.log("hello vijay gorade");

const apiURL = "https://restcountries.com/v3.1/all";

const mainDiv = document.querySelector(".mainDiv");

async function getData() {
  try {
    const Data = await fetch(apiURL);
    const realData = await Data.json();

    let innerHtml = ``;

    realData.forEach((actualObj) => {
      console.log("hello");

      const currencyKey = actualObj.currencies ? Object.keys(actualObj.currencies)[0] : null;
      const currency = currencyKey ? actualObj.currencies[currencyKey] : { name: "N/A", symbol: "" };

      innerHtml += `
      <div class="card">
        <div class="flag">
          <img src="${actualObj.flags.png}" alt="Flag of ${actualObj.name.common}">
        </div>
        <div class="content">
          <h2>${actualObj.name.common}</h2>
          <div class="divider"></div>
          <div class="detail">
            <span class="label">Population:</span>
            <span class="value population">${actualObj.population.toLocaleString()}</span>
          </div>
          <div class="detail">
            <span class="label">Land Area:</span>
            <span class="value">${actualObj.area ? actualObj.area + " km²" : "N/A"}</span>
          </div>
          <div class="detail">
            <span class="label">Region:</span>
            <span class="value">${actualObj.region}</span>
          </div>
          <div class="detail">
            <span class="label">Capital:</span>
            <span class="value capital">${actualObj.capital?.[0] || "N/A"}</span>
          </div>
          <div class="detail">
            <span class="label">Currency:</span>
            <span class="value currency">${currency.name} (${currency.symbol})</span>
          </div>
        </div>
      </div>`;
    });

    mainDiv.innerHTML = innerHtml;
  } catch (e) {
    console.log("Error:", e);
  }
};

getData();  



const searchIcon=document.getElementById('searchIcon');

const input=document.querySelector("input");

searchIcon.addEventListener("click",()=>{
    getDataBySearch();
})    

async function getDataBySearch()
{
    try{
        
    const  url="https://restcountries.com/v3.1/name/${input.value}?fullText=true";
    const data= await fetch(url);
    const realData=await data.json();
     
    let html=``;

    realData.forEach((actualObj) => {
  
        console.log(actualObj)
        const currencyKey = actualObj.currencies ? Object.keys(actualObj.currencies)[0] : null;
        const currency = currencyKey ? actualObj.currencies[currencyKey] : { name: "N/A", symbol: "" };
  
        html += `
        <div class="card">
          <div class="flag">
            <img src="${actualObj.flags.png}" alt="Flag of ${actualObj.name.common}">
          </div>
          <div class="content">
            <h2>${actualObj.name.common}</h2>
            <div class="divider"></div>
            <div class="detail">
              <span class="label">Population:</span>
              <span class="value population">${actualObj.population.toLocaleString()}</span>
            </div>
            <div class="detail">
              <span class="label">Land Area:</span>
              <span class="value">${actualObj.area ? actualObj.area + " km²" : "N/A"}</span>
            </div>
            <div class="detail">
              <span class="label">Region:</span>
              <span class="value">${actualObj.region}</span>
            </div>
            <div class="detail">
              <span class="label">Capital:</span>
              <span class="value capital">${actualObj.capital?.[0] || "N/A"}</span>
            </div>
            <div class="detail">
              <span class="label">Currency:</span>
              <span class="value currency">${currency.name} (${currency.symbol})</span>
            </div>
          </div>
        </div>`;
      });

      mainDiv.innerHTML=html;
    }
    catch(e)
    {
mainDiv.innerHTML='<img src="https://cdnl.iconscout.com/lottie/premium/thumb/page-not-found-animation-download-in-lottie-json-gif-static-svg-file-formats--404-error-web-the-ultimate-pack-design-development-animations-3299954.gif" class="img">'
    }

}

console.log(input.value)

input.addEventListener("input",()=>{
    if(input.value)
    {
        
searchIcon.addEventListener("click",()=>{
    getDataBySearch();
})   
    }
    else
    {
        getData();
    }

})