// localStorage.getItem("locationName")
felloName =  "Jane"
//alert(felloName.length)

internalUsers =JSON.parse(localStorage.getItem("random"))
if(internalUsers == null)
{
internalUsers = [];

}


JSON.stringify // converts JSON to string

JSON.parse // converts to JSON

function AddNewUser()
{
    

    newUser = 
    { "fullName" : document.getElementById("fullName").value,
       "email" : document.getElementById("email").value,
       "phone" : document.getElementById("phone").value,
       "pics" : document.getElementById("pics").value

     }
     internalUsers.push(newUser)


    localStorage.setItem("random",JSON.stringify(internalUsers))

    displayUsers()




}

function displayUsers(){

usersPlaceholder =  '';
for (i=0; i<internalUsers.length;i++)
{

  if(internalUsers[i]!=null || internalUsers[i]!=undefined )
  {
  usersPlaceholder +=`<div>
  <img src="${internalUsers[i].pics}" style="max-height: 100px;">
  <strong>Full Name</strong> : ${internalUsers[i].fullName}<br>
  <strong>Email</strong> : ${internalUsers[i].email}<br>
  <strong>Phone</strong> : ${internalUsers[i].phone}<br>
  <button  style="background-color:red; color:#FFF" onClick="deleteUser(${i})" >Delete</button>
  <button style="background-color:green; color:#FFF" onClick="editUser(${i})" >Edit</button>

</div> <hr>`}


}
document.getElementById("users").innerHTML = usersPlaceholder
}

displayUsers()