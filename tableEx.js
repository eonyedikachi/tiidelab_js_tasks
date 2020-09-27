
let companyList= [
    {
      "name": "Solamith Nig Ltd",
      "email": "info@solamith.com",
      "location":  "Abuja",
    },
    {
      "name": "Robert Bosch Nig Ltd",
      "email": "info@bosch.ng",
      "location":  "Lagos",
    },
    {
      "name": "Lifemate Furnitures",
      "email": "sales@lifemate.com",
      "location":  "Abuja",
    }
  ];


function displayCompanyDetails() 
    {

  let row = document.getElementById("rows")


  for(  i = 0; i < companyList.length; i++ ){
    row.innerHTML += `
          <tr>
              <td> ${i + 1}</td>
              <td> ${companyList[i].name}</td>
              <td> ${companyList[i].email} </td> 
              <td> ${companyList[i].location} </td>
          </tr>`

    }
  }
    // end of displaycompanydetails

  



// Add ne User
  function newCompany(){
          
          newCompany = {
          "name": prompt("Enter Company  Name"),
          "email": prompt("Enter Company Email"),
          "location": prompt("Enter Company Location"),
          }

          // Add new user details to userList
          companyList.push(newCompany)
         
      }