var sitenameInput=document.getElementById("sitename");
var siteurlInput=document.getElementById("siteurl");
var btndelet=document.getElementById("btndelet");
var tabledata=document.getElementById("tabledata");
 var contenttable=document.getElementById("contenttable");
var close =document.getElementById("close");
var backlight=document.querySelector(".backlight");
var site=[];


function addinfo(){

    if(validationinfo(sitenameInput)&&
validationinfo(siteurlInput))
{
var inform={
    name:sitenameInput.value.trim(),
    url:siteurlInput.value.trim(),
};
site.push(inform);
displayinfo();
clearinfo();


}
else{
    backlight.classList.remove("d-none");

}


}

function displayinfo(){
    var cartona="";
for(let i=0;i<site.length;i++){
   cartona+=`
                         <tr>
        <td>${i+1}</td>
            <td>${site[i].name}</td>
            
<td><a  href="${site[i].Link}" target="_blank" class="btn btn-success " ><i class="fa-regular fa-eye"></i> Visit</a></td>
<td><button onclick="deleteinfo(${i})" id="btndelet"  class="btn btn-danger ><i class="fa-solid fa-trash-can"></i> Delete</button></td>

                </tr>
              `


             document.getElementById("contenttable").innerHTML=cartona;

}



}

function clearinfo(){
    sitenameInput.value=null;
    siteurlInput.value=null;
    sitenameInput.classList.remove("is-valid");
        siteurlInput.classList.remove("is-valid");
}

function deleteinfo(index){

    site.splice(index,1);

localStorage.setItem("siteContainer", JSON.stringify(site));
console.log(site);
displayinfo();




}



function validationinfo(element){
    var text=element.value;
    var regex={
        sitename:/^[a-zA-Z][a-zA-Z0-9 _-]{2,19}$/,
        siteurl:/^https?:\/\//g,
    }
    if(regex[element.id].test(text)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;



    }
    else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        return false;
    }

}


 
function closeslide(){
    backlight.classList.add("d-none");
  
  } 
  document.addEventListener("click",function(e){
    if(e.target===backlight){
      closeslide();
    }
  
   })
  close.addEventListener("click",closeslide);
   
    document.addEventListener("keydown", function (e) {
        if (e.key == "Escape") {
          closeslide();
        }
      });
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("backlight")) {
          closeslide();
        }
      });