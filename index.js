

document.querySelector("form").addEventListener("submit",MasaiRecord)

let masaiArr=JSON.parse(localStorage.getItem("masai"))||[]

function MasaiRecord(event){
    event.preventDefault();
 let masaiR={
        EmployeeName:document.getElementById("name").value,
        EmployeeID:document.getElementById("employeeID").value,
        Department:document.getElementById("department").value,
        Experience:document.getElementById("exp").value,
        EmailAddress:document.getElementById("email").value,
        mobile:document.getElementById("mbl").value
       
    }
    // console.log(masaiR)
   
    masaiArr.push(masaiR)
    localStorage.setItem("masai",JSON.stringify(masaiArr))
    append(masaiArr)
}
append(masaiArr)
function append(masaiArr){
    document.querySelector("tbody").innerHTML=""
    masaiArr.forEach(function(elem,index){
    
        let row=document.createElement("tr");

        let Name=document.createElement("td")
        Name.innerText=elem. EmployeeName

        let ID=document.createElement("td")
        ID.innerText=elem. EmployeeID

        let Dep=document.createElement("td")
        Dep.innerText=elem. Department

        let  Exp=document.createElement("td")
        Exp.innerText=elem.Experience;

        let Email=document.createElement("td")
        Email.innerText=elem.EmailAddress

         let mobile=document.createElement("td")
         mobile.innerText=elem.mobile
        let dtl=document.createElement("td")
        dtl.innerText="Delete"
        dtl.style.color="red"
        dtl.addEventListener("click",function(){
            deleteRow(elem,index)
        })
                 
        row.append(Name,ID,Dep,Exp,Email,mobile,dtl)
        document.querySelector("tbody").append(row)

    })

   
}
function deleteRow(index){
    masaiArr.splice(index,1)
    localStorage.setItem("masai",JSON.stringify(masaiArr))
    append(masaiArr)
}