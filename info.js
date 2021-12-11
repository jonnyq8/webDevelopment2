const user = document.getElementById('userName');
const pass = document.getElementById('pass');
var error= document.querySelector("#error");
var fname= document.querySelector("#fname");
var form = document.querySelector('#signup');

function masterFunc(){
     return checkCapitalPass(),checkCapitalFname(),validateUsername(),allAlphaLname(),allAlpha(),checkCapitalFname(), validatePassword();
};
     //  
function validateUsername(){
     var allAlpha2 = true;
     var elem2 = document.querySelector("#userName");
var error2= document.querySelector("#error");
var inputValue2 = elem2.value.trim();
     

     if (inputValue2.charAt(0) < "A" || inputValue2.charAt(0) > "Z" )  { 
          allAlpha2 = false;
          
     }
     if(!allAlpha2){    
          p2=document.createElement('p');
          p2.innerText=('UserName: First Letter Needs to be Capitalize');
          error2.append(p2);
           return allAlpha2;
     }
     else{
          return true;
     }   
}


function validatePassword(){
     var passCap = false;
     var passAlpha = false;
     var passNum = false;
     var alphaString = "abcdefghijklmnopqrstuvwxyz";
     var capString="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var numString = "0123456789";
     var elem = document.querySelector('#pass');
     var elem2 = document.querySelector('#confirmPassword')
     var inputValue = elem.value.trim();
     var inputValue2 = elem2.value.trim();
     var error1= document.querySelector("#error");
     for (var i = 0; i < inputValue.length; i++) {
          if (capString.indexOf(inputValue.substr(i,1))>= 0)   { 
               passCap = true; 
          }
          
          if (alphaString.indexOf(inputValue.substr(i,1))>= 0)   {
               passAlpha = true; 

          }
          if (numString.indexOf(inputValue.substr(i,1))>= 0)   { passNum = true; }
     }
     if (!passAlpha){
          // frm.password.focus();
          var p6=document.createElement('p');
              p6.innerText=('Password Needs a lowercase alphabet letter');
              error1.append(p6);
              alert(p6)
          return false;
     }
     if (!passCap){
          p5=document.createElement('p');
              p5.innerText=('Password Needs a Capitalize Letter');
              error1.append(p5);
          return false;
     }
     if (!passNum){
          p7=document.createElement('p');
          p7.innerText=('Please enter a meaningful Password with at least one Number letter.');
          error1.append(p7);
          return false;
     }
     if (inputValue!=inputValue2){
          p8=document.createElement('p');
              p8.innerText=('Passwords do not match');
              error1.append(p8);
          return false;
     }
     else{
          return true;
     }
}

function allAlphaLname(){
     
     var error3= document.querySelector("#error");
     var Alpha = true;
     var elem = document.querySelector('#lname');
     var inputValue = elem.value.trim();
     var inputValue = inputValue.toUpperCase();
     for (var i = 0; i < inputValue.length; i++) {
          if(inputValue.charAt(i)<'A'||inputValue.charAt(i)>'Z'){
               Alpha=false;
          }
     } 
          if(!Alpha){
               para=document.createElement('p');
               para.innerText=('Last Name: Only Letters are allowed in this field');
               error3.append(para);
               return Alpha;
          }
     return Alpha;

}
function allAlpha(){
     var Alpha = true;
var error4= document.querySelector("#error");

     var elem = document.querySelector('#fname');
     var inputValue = elem.value.trim();
     var inputValue = inputValue.toUpperCase();
     for (var i = 0; i < inputValue.length; i++) {
          if(inputValue.charAt(i)<'A'||inputValue.charAt(i)>'Z'){
               Alpha=false;
          }
     } 
          if(!Alpha){
               p2=document.createElement('p');
               p2.innerText=('First Name: Only Letters are allowed in this field');
               error4.append(p2);
               return Alpha;
          }
     return Alpha;

}

function checkCapitalLname() {
     var error5= document.querySelector("#error");
     
     var isCap
     var elem = document.querySelector('#lname');
     var inputValue = elem.value.trim();
     
     if(inputValue.charAt(0)<'A'||inputValue.charAt(0)>'Z'){
          isCap=false;
          para1=document.createElement('p');
          para1.innerText=('Last Name:First Letter Needs to be Capitalize');
          error5.append(para1);
          return isCap;
     }
     return true;
}
function checkCapitalPass() {
     var error6= document.querySelector("#error");
    
     var allAlpha2 = true;
    var elem2 = document.querySelector('#pass');
    var inputValue2 = elem2.value.trim();
    
//     for (var i = 0; i < inputValue.length; i++) {
         // check all characters are letters
        if (inputValue2.charAt(0) < "A" || inputValue2.charAt(0) > "Z" )  { 
             allAlpha2 = false;

             para2=document.createElement('p');
             para2.innerText=('Password: First Letter Needs to be Capitalize');
             error6.append(para2);
             alert(allAlpha2)
               return false;
          }
          alert(allAlpha2)
   
       return allAlpha2;   
    }  
function checkCapitalFname() {
     var error6= document.querySelector("#error");
     
     var allAlpha2 = true;
     var elem2 = document.querySelector('#fname');
     var inputValue2 = elem2.value.trim();
     

     if (inputValue2.charAt(0) < "A" || inputValue2.charAt(0) > "Z" )  { 
          allAlpha2 = false;
 
              p2=document.createElement('p');
              p2.innerText=('First Name: First Letter Needs to be Capitalize');
              error6.append(p2);
                return allAlpha2;
           }
    
        return allAlpha2;   
     }  
    

