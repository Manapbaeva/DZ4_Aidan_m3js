const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const request= new XMLHttpRequest();
    request.open("GET", "package.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", ()=>{
        console.log(JSON.parse(request.response));
        const data= (JSON.parse(request.response))
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".address").innerHTML = data.address;
    })
});