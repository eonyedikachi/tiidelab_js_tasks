 // Class exercise 08/09/2020
    //    Exercise A
    function funcEx1() {
        val = prompt("Please enter a value: ");
  
        val == "" ? alert("null/undefined") : alert(val);
      }
  
      // Exercise B
      function funcEx2() {
        num = prompt("Please enter a value: ");
        num = parseInt(num);
        num >= 100 ? alert("Century or Above") : alert("Less than a century");
      }
  
      // Class exercise 09/09/2020
      function funcEx3() {
        val = prompt(
          "Select an Option: \n1. Airtime-Self \n2. Airtime-Others \n3. Data \n4. Transfer"
        );
  
        // Airtime for self
        if (val == 1) {
          amount = prompt("Please enter amount: ");
          verify = confirm(
            "Do you want to purchase airtime worth NGN" + amount + "?"
          );
  
          // Show transaction status
          if (verify) {
            alert("Successful purchase of Airtime: NGN" + amount);
          } else {
            alert("Transaction Cancelled!");
          }
        }
  
        // Airtime for others
        else if (val == 2) {
          network = prompt("Please enter third party phone number: ");
          amount = prompt("Please enter amount: ");
          verify = confirm(
            "Do you want to purchase airtime worth NGN" +
            amount +
            " for " +
            network +
            "?"
          );
  
          // Show transaction status
          if (verify) {
            alert(
              "Successful purchase of Airtime: NGN" + amount + " for " + network
            );
          } else {
            alert("Transaction Cancelled!");
          }
        }
  
        //Data
        else if (val == 3) {
          network = prompt("Please select phone number: ");
          amount = prompt("Please enter amount: ");
  
          verify = confirm(
            "Do you want to purchase data worth NGN" +
            amount +
            " for " +
            network +
            "?"
          );
  
          // Show transaction status
          if (verify) {
            alert(
              "Successful purchase of data: NGN" + amount + " for " + network
            );
          } else {
            alert("Transaction Cancelled!");
          }
        }
  
        // transfer
        else if (val == 4) {
          amount = prompt("Please enter amount: ");
          actNum = prompt("Please enter account number: ");
          bank = prompt(
            "Please select bank: \n1. GTBank \n2. Zenith Bank \n3. First Bank \n4. Others , please enter bank name."
          );
  
          // Allow user to confirm transfer for GTBank
          if (bank == 1) {
            verify = confirm(
              "Do you want to transfer NGN" +
              amount +
              " for Guaranty Trust Bank to " +
              actNum +
              "?"
            );
  
            // Show transaction status
            if (verify) {
              alert(
                "Successful transfer of NGN" +
                amount +
                " to " +
                actNum +
                " with Account in " +
                "Guaranty Trust Bank"
              );
            } else {
              alert("Transaction Cancelled!");
            }
          }
  
          // Allow user to confirm transfer for Zenith Bank
          else if (bank == 2) {
            verify = confirm(
              "Do you want to transfer NGN" +
              amount +
              " for Zenith Bank PLC to " +
              actNum +
              "?"
            );
  
            // Show transaction status
            if (verify) {
              alert(
                "Successful transfer of NGN" +
                amount +
                " to " +
                actNum +
                " with Account in " +
                "Zenith Bank PLC"
              );
            } else {
              alert("Transaction Cancelled!");
            }
          }
  
          // Allow user to confirm transfer for First Bank
          else if (bank == 3) {
            verify = confirm(
              "Do you want to transfer NGN" +
              amount +
              " for First Bank PLC to " +
              actNum +
              "?"
            );
  
            // Show transaction status
            if (verify) {
              alert(
                "Successful transfer of NGN" +
                amount +
                " to " +
                actNum +
                " with Account in " +
                "First Bank PLC"
              );
            } else {
              alert("Transaction Cancelled!");
            }
          }
  
          // Allow user to confirm transfer for Other banks
          else {
            verify = confirm(
              "Do you want to transfer NGN" +
              amount +
              " for " +
              bank +
              " to " +
              actNum +
              "?"
            );
  
            // Show transaction status
            if (verify) {
              alert(
                "Successful transfer of NGN" +
                amount +
                " to " +
                actNum +
                " with Account in " +
                bank
              );
            } else {
              alert("Transaction Cancelled!");
            }
          }
        }
  
        else {
          alert("End");
        }
      }// end of funcEx3
  
  
      // Class exercise 14/09/2020
  
      function funcEx4() {
  
        do {
  
          optionVal = prompt(
            "Select an Option: \n1. Addition \n2. Subtraction \n3. Division \n4. Multiplication"
          );
  
          // For Addition
          if (optionVal == 1) {
            choice = "Addition";
  
            // num = funcPrompt();
            // alert ((num.val1));
    
  
            result = funcAdd();
            funcDisplayResult(result, choice);
  
          }
  
          // For subtraction
          else if (optionVal == 2) {
  
            choice = "Subtraction";
  
            result = funcSub();
  
            funcDisplayResult(result, choice);
  
          }
  
          // For Division
  
          else if (optionVal == 3) {
  
            choice = "Division";
  
            result = funcDivide();
            funcDisplayResult(result, choice);
  
          }
  
          // for Multiplication
          else if (optionVal == 4) {
            choice = "Multiplication";
  
            result = funcMultiply();
            funcDisplayResult(result, choice);
          }
  
          else {
            alert("Wrong Input");
          }
  
          decide = prompt("Enter 1 to continue \nEnter any key to quit:");
  
        } while (decide == 1);// End  of do - while loop
  
  
      }
  
      //function to prompt and receive input from user
      function funcPrompt() {
        val1 = parseInt(prompt("Please enter first number: "));
        val2 = parseInt(prompt("Please enter second number: "));
        return val = {
          "val1": val1,
          "val2": val2
        }
      }
  
     yes = funcPrompt.val1;
  
      //Display the result based on the operation selected
      function funcDisplayResult(result, choice) {
  
        alert("The Result of the " + choice + " is: " + result);
  
      }
  
      //Function to compute addition
      function funcAdd() {
  
        num1 = parseInt(prompt("Please enter first number: "));
        num2 = parseInt(prompt("Please enter second number: "));
        result = parseInt(num1 + num2);
        return result;
      }
  
      // function to compute subtraction
      function funcSub() {
        num1 = parseInt(prompt("Please enter first number: "));
        num2 = parseInt(prompt("Please enter second number: "));
        result = parseInt(num1 - num2);
        return result;
      }
  
      //on to compute division
      function funcDivide() {
        num1 = parseInt(prompt("Please enter first number: "));
        num2 = parseInt(prompt("Please enter second number: "));
        result = parseInt(num1 / num2);
        return result;
      }
  
      //function to compute multiplication
  
      function funcMultiply() {
        num1 = parseInt(prompt("Please enter first number: "));
        num2 = parseInt(prompt("Please enter second number: "));
        result = parseInt(num1 * num2);
        return result;
      }
  
  
  
  
      var info = [["SN","Company Name","Company Email"],
                           ["1","Solamith","info@solamith.com"],
                           ["2","TIIDELab","hi@tiidelab.com"],
                           ["3","Bosch","info@bosch.com"],
                           ["3","Cappa","tool@cappa.com"]],
                  table = document.getElementById("table");
          
             
             for(var i = 0; i < info.length; i++)
             {
                 // create a new row
                 var newRow = table.insertRow(table.length);
                 for(var j = 0; j < info[i].length; j++)
                 {
                     // create a new cell
                     var cell = newRow.insertCell(j);
                     
                     // add value to the cell
                     cell.innerHTML = info[i][j];
                 }
             }
  
  
             function day21(){
               let internalUser ={
                 
               }
  
             }
  
             function displayCompanyDetails() 
        {
        
      let companyList= [
        {
          "companyName": "Ksolution",
          "companyEmail": "K@solution.com",
          "companyLogo":  "company_1.jpg",
        },
        {
          "companyName": "WhatsApp",
          "companyEmail": "whatsapp@gmail.com",
          "companyLogo":  "company_2.jpg",
        },
        {
          "companyName": "Zoom",
          "companyEmail": "tiktok@yahoo.com",
          "companyLogo":  "company_3.png",
        }
      ];
  
      for( let companyInfo of companyList){
        companyList += `<div>
        <img src="${companyInfo.companyLogo}" alt="${companyInfo.companyName} Image"> <br>
        <strong>Company Name</strong> : ${companyInfo.companyName} <br>
        <strong>Company Email</strong> : ${companyInfo.companyEmail} <br>
        </div><hr>` 
      }
      document.getElementById("companyList").innerHTML = companyList;
  
        }// end of displaycompanydetails