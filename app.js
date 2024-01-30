const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown = document.querySelectorAll(".dropdown select");

for (select of dropdown)
{
    console.log(select);
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
}