let btn = document.querySelector("#clickForResult");

let result = document.querySelector("#res")

let url = "https://catfact.ninja/fact";

async function getRquest(){
    try {
        let res = await axios(url);
        console.log(res.data.fact);
        result.innerHTML += `${res.data.fact} <br> <br>`;
    } catch (err) {
        console.log(`Error is ${err}`);
    }
}

btn.addEventListener("click", () => {
    getRquest();
})