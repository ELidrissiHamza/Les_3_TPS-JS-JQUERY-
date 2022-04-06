


$(document).ready(function(){


$("#btn2").click(function()
{
    // ajouter un element html
ajouter_elem();
});

$("#btn1").click(function()
{
    // remover un element html
remover_elem();


});





// fonction qui Ajout un element

function ajouter_elem()
{
    // expression qui teste la validation du texte entrer
    let valid=/^([a-z])+$/i;
    // message afficher
    var text=prompt("Entrer le nom de l element que vous voulez Ajouter");
    if(text=="Nom")
    {
        alert("deja exist (champ principal !)");
        return;
    }
  
    // tester l existance de l element
    if(text &&  $("#"+text).length)
    {
        alert("deja exist !");
    }
    else
     {
         // verifier que l element n existe pas
     if(text && $("#"+text).length==0){
         //tester la validation de l element choisit
         if(text.match(valid)){
  
            // creer l element
    var elem = "<input id='"+text+"'> ";
    // affecter l element au conteneur
    $("#idbox2").append(elem);
   
    // ajouter les attributs au element
    $('#'+text).attr("type", "text");
   
    $('#'+text).addClass("form-control");
   
    $('#'+text).attr("placeholder", "Votre "+ text);
    
    }
    // l expression ne match pas notre expression reguliere
    else
    {
        alert("expression incorrecte !");
    }
   
}
}
}






// fonction qui remouve un element

function remover_elem()
{
    // afficher le message pour recuperer le nom
    var text=prompt("Entrer le nom de l element que vous voulez Remover");


    if(text=="Nom")
    {
        alert("Impossible (champ principal !)");
        return;
    }
    // si le text recuperer different de null
    if(text)
    {
        // si l element a remover n existe pas
    if($("#"+text).length==0)
    {
        alert("N existe pas!");
    }
    else{
        // remover l element
  
    $('#'+text).remove();
;
    }
   }
   // si l utulisateur n a pas ecrire dans le prompt
  

}


});