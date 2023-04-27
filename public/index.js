const sneakForm = document.querySelector("#newSneak")

fetch("/api/favlist").then(res=>{
    return res.json();
}).then(data=>{
    data.forEach(fav=>{
        const newLi = document.createElement("li");
        newLi.textContent = `${fav.name}'s ${fav.location} ${fav.hobby}`
        document.querySelector("#sneakList").append(newLi)
    })
})

sneakForm.addEventListener("submit", e=>{
    e.preventDefault();
    const newList = {
        name:document.querySelector("#sneakName").value,
        location:document.querySelector("#sneakColor").value,
        hobby:document.querySelector("#sneakOwner").value
    }
      console.log(newList);
      fetch("/api/favlist/added",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newList),

    }).then(res=>{
        if(res.ok){
            // location.reload()
        } else {
            console.log(res)
            alert("womp womp. something went wrong!")
        }
    })
})