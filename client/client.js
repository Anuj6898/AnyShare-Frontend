const getData = document.getElementById("getdata")
const showstat = document.getElementById("showstatus")
var collect;
const getdata = async ()=>{
    await fetch("http://localhost:3000/home")
    .then((x)=>x.json())
    .then(data=>{
        collect = data
    }).catch(err=>console.log(err))
    console.log(collect.name)
    showstat.innerText = collect.name
}
