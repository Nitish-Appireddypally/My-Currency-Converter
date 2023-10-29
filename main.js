console.log("Hello");

const populate = async(value ,currency)=>{
    let myStr=""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_Xdfo1vH9wPQOudI4v4cdyIeZw8raoX1aKwnICDoK&base_currency="+currency;
    let response= await fetch(url)
    let rJson= await response.json();
    document.querySelector(".output").style.display="block"

    

    for (let key of Object.keys(rJson["data"])){
        console.log(key)
        myStr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"]*value)}</td>
                  </tr>

                `
    }
    const tableBody=document.querySelector("tbody");
tableBody.innerHTML = myStr;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Button is clicked")
    const value =parseInt(document.querySelector("input[name='quantity']").value);
    const currency =document.querySelector("select[name='currency']").value;

    populate(value,currency)
});


