



$(document).ready(function(){

    
   $("#messageerror").hide();
   $("#messagevalide").hide();



 $("#btn1").click(function()
 {
     verifier();
 })  ; 



 $("#btn2").click(function()
 {
     Ajouter();
 })  ; 


function verifier()
{
   var username=$("#idinp1").val(),
   password=$("#idinp2").val();
   
   var utulisateur=localStorage.getItem(username);
   
   var data=JSON.parse(utulisateur);
   
   console.log(data)
   
   if(utulisateur==null)
   {
      
    $("#messagevalide").hide();
    $("#messageerror").html("username incorrecte !!");
    $("#messageerror").css(
        {
           "color": "red",
          "width": "50%",
           "font-family": "cursive",
           "font-size" : "xx-large",
           "-webkit-box-shadow": "5px 5px 15px 5px red", 
           "box-shadow": "5px 5px 15px 5px red",
           "position": "relative",
           "left": "20px",
           "right": "20px"

        });
       
        $("#messageerror").show(1000);



   }


   else if(username == data.username && password == data.password)
   {
      
       $("#messageerror").hide();
       $("#messagevalide").html("Loged In");
       $("#messagevalide").css(
           {
              "color": "rgb(39, 240, 39)",
             "width": "50%",
              "font-family": "cursive",
              "font-size" : "xx-large",
              "-webkit-box-shadow": "5px 5px 15px 5px green", 
              "box-shadow": "5px 5px 15px 5px green",
              "position": "relative",
              "left": "20px",
              "right": "20px"
  
           });
           $("#messagevalide").show(1000);

   }
   else
   {
    

       $("#messagevalide").hide();
       $("#messageerror").html("username incorrecte !!");
       $("#messageerror").css(
           {
              "color": "red",
             "width": "50%",
              "font-family": "cursive",
              "font-size" : "xx-large",
              "-webkit-box-shadow": "5px 5px 15px 5px red", 
              "box-shadow": "5px 5px 15px 5px red",
              "position": "relative",
              "left": "20px",
              "right": "20px"
  
           });
           $("#messageerror").show(1000);
   }





}



function Ajouter()
{
   
   event.preventDefault();

   var username = $("#inp3").val(),
       password = $("#inp4").val();

     
       //creer l objet
       var utulisateur=
       {
          "username":username,
          "password":password,
       };
       //stocker l objet dans le localstorage
       localStorage.setItem(username,JSON.stringify(utulisateur));
       console.log('-------------------------------------');

}



});