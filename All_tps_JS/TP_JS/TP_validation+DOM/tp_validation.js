
//mon expression reguliere
let valid1=/^(([a-zèéêîïçÿ]+)?(\b(\-|'))?(\b\s+)?([a-zèéêîïçÿ]+?)(\s+)?)+$/gi;






//fonction qui teste la validation du nom
function valider()
{
    //recuperer la valeur de l input
        var inp=document.getElementById("exampleFormControlInput1");
        //matcher l expression
        if(inp.value.match(valid1))
        {
                //affecter la classe true au input
                inp.classList.add("truee");
                //remover la classe true au input
                inp.classList.remove("falsee");
                document.getElementById('span1').innerHTML="Nom valide";
                document.getElementById('span1').classList.add("spant");
                document.getElementById('span1').classList.remove("spanf");
        }
        else
        { 
            //affecter la classe false au input
            inp.classList.add("falsee");
            //remover la classe false au input
            inp.classList.remove("truee");
            document.getElementById('span1').innerHTML="Nom invalide";
            document.getElementById('span1').classList.add("spanf");
            document.getElementById('span1').classList.remove("spant");
        }

}





//fonction qui reinitise l input
function vider()
{
        //vider le span
        document.getElementById('span1').innerHTML="";
        //vider l input
        document.getElementById('exampleFormControlInput1').value="";
        //remover les classes affectes
        document.getElementById("exampleFormControlInput1").classList.remove("truee");
        document.getElementById("exampleFormControlInput1").classList.remove("falsee"); 


}



//fonction qui ajout le prenom lorsqu'on clique sur ajouter prenom
let verification1=0;// on a besoin de cette variable pour creer et remove l element l orsqu on clique une deuxieme fois 
function ajoutprenom()
{
   
                if(verification1==0)
                {
                    //changer la valeur du bouton
                    document.getElementById("btn2").innerHTML="Remover Prenom";
                    //creation de input
                var x = document.createElement("INPUT");
                
                //affecter des attributs au elements creer
                x.setAttribute("type","text");
                x.setAttribute("placeholder","Votre Prenom");
                x.setAttribute("id","exampleFormControlInput2");
                x.setAttribute("class","form-control");


                //remover les classes et les valeurs affectes
                x.addEventListener('click', function() 
                {
                    //vider le span1
                    document.getElementById('span1').innerHTML="";
                    //vider l input 2
                    document.getElementById('exampleFormControlInput2').value="";
                    // remover les classes affectes au input 1
                    document.getElementById("exampleFormControlInput2").classList.remove("truee");
                    document.getElementById("exampleFormControlInput2").classList.remove("falsee"); 
                }, false);

            
                // affecter l input creeer au box
                document.getElementById("idbox").appendChild(x);
                
                //creation du button
            var y=document.createElement("button");
            //affecter des attributs au button creer
            y.setAttribute("type","button");
            y.setAttribute("class","btn btn-outline-success");
            y.setAttribute("id","btn3");
            
            y.innerHTML = "Entrer";
            
            y.addEventListener('click', function() 
            {
                // matcher l input du prenom
                var inp=document.getElementById("exampleFormControlInput2");
                if(inp.value.match(valid1))
                {
                    // affecter la classe truee au input
                    inp.classList.add("truee");
                    // remove la classe falsee au input
                    inp.classList.remove("falsee");
                    document.getElementById('span1').innerHTML="Prenom valide";
                    // affecter la classe truee au span1
                    document.getElementById('span1').classList.add("spant");
                    // remove la classe falsee au spant
                    document.getElementById('span1').classList.remove("spanf");
                }
                else{ 
                    //affecter la classe falsee
                inp.classList.add("falsee");
                // remover la classe truee 
                inp.classList.remove("truee");
                document.getElementById('span1').innerHTML="Prenom invalide";
                // affecter la classe spanf au span1
                document.getElementById('span1').classList.add("spanf");
                // remover la classe spant au span1
                document.getElementById('span1').classList.remove("spant");
            }
            }, false);

            // affecter le bouton au box
            document.getElementById("idbox").appendChild(y);

            var btn_date = document.createElement("button");
            btn_date.setAttribute("type","button");
            btn_date.setAttribute("class","btn btn-outline-success");
            btn_date.setAttribute("id","btn4");
            btn_date.innerHTML = "Ajouter Date de naissance";
            btn_date.setAttribute("onclick","ajoutdate()");
                //affecter l element br au box
                document.getElementById("idbox").appendChild(btn_date);
                // initialiser la variable a 1
                verification1=1;

                }
                else{
                //  document.getElementById("retour1").remove();
                    document.getElementById("btn2").innerHTML="Ajouter Prenom";

                    document.getElementById("exampleFormControlInput2").remove();
                    document.getElementById("btn3").remove();
                    document.getElementById("btn4").remove();
                    
            if(verification3==1)
                    {
                        document.getElementById("exampleFormControlInput3").remove();
                       
                        document.getElementById("btn5").remove();
                        verification2=0;
                        verification3=0;
                    }
                    verification1=0;
                }

  
}




let verification2=0,verification3=0;
// verification3:variable qui recoit 1 dans le cas ou on l ajoute et on a besoin de cette variable pour remover l input a ppartir du button ajouter prenom (pour ne pas selectionner un element appartir d un id null)

// verification2 : variable pour annuler l input si l utulisateur click sur le bouton une deuxieme fois
function ajoutdate()
{

        // l ajout de l'element
            if(verification2==0)
            {
                    
                    verification3=1;

                        
                    // creer l element input pour la date de naissance
                        var inp_date=document.createElement("INPUT");

                        //affecter des attributs au elements creer
                        inp_date.setAttribute("type","date");
                        inp_date.setAttribute("placeholder","Votre Date de naissance");
                        inp_date.setAttribute("id","exampleFormControlInput3");
                        inp_date.setAttribute("class","form-control");

                        //document.getElementById("idbox").appendChild(retour);
                        document.getElementById("idbox").appendChild(inp_date);

                        //creer l element bouton pour evaluer la date de naissance
                    var btn5=document.createElement("button");
                    // affecter les attributs au element creer
                    btn5.setAttribute("type","button");
                    btn5.setAttribute("class","btn btn-outline-success");
                    btn5.setAttribute("id","btn5");
                    btn5.innerHTML = "Entrer";
                    // changer la valeur de l input
                    document.getElementById("btn4").innerHTML="Remover date ";
                    //affecter l element creer au box principal
                    document.getElementById("idbox").appendChild(btn5);

                    //changer la valeur du variable pour ne pas creer plusieurs fois
                    verification2=1;

             }
            else
            {
                //sinon : remover l element
                    
                    document.getElementById("btn4").innerHTML="Ajouter date ";
                    document.getElementById("exampleFormControlInput3").remove();
                    document.getElementById("btn5").remove();
                // document.getElementById("retour3").remove();
                    
                
                    // mettre la variable a 0 pour pouvoir creer l element une autre fois
                    verification2=0;
                    verification3=0;
            }



}