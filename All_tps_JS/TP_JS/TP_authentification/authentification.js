

/* pour verifier l'authentification*/ 
let ver=0;//on va utuliser cette variable pour eviter la repitition du message
function verify()
{
  
    event.preventDefault();  
    //selectionner la valeur de l input username
    var nom=document.getElementById("idinp1").value; 
    //selectionner la valeur de l input password
    var pass=document.getElementById("idinp2").value;
    
    //recuperer item from localstorage
    var utilisateur=localStorage.getItem(nom);
    //faire parser l item
    var data=JSON.parse(utilisateur);

    console.log(data);
//L utulisateur n a pas entrer username ou username n existe pas
   if(utilisateur==null){
    if(ver==0){
        // creer une paragraphe
    var x=document.createElement("P");
    //affecter des attributs au element cree
    x.innerHTML="wrong usename";
    //creer une classe
    x.setAttribute("id","Faa");
    //affecter la classe au elements cree
    x.classList.add("Faa");
    
    document.getElementById("message").appendChild(x);
    //affecter la valeur 1 au variable ver pour eviter la repitition de message 
    ver=1;
   
    }
    }

    // l utulisateur faire son authentification

else if(nom==data.user && cryptPass(pass)==data.pass){
    if(ver==0){

  //creer une paragraphe 
    var x=document.createElement("P");
    // affecter des attributs au paragraphe
    x.innerHTML="loged in";
    x.setAttribute("id","Tr");
    x.classList.add("Tr");
    document.getElementById("message").appendChild(x);
    ver=1;
  
    }

}
else
{
    //password incorrecte ou bien l utulisateur na pas entrer le password
if(ver==0){

    //creer une paragraphe
    var x=document.createElement("P");
    //creer des attributs au paragraphe
    x.innerHTML="wrong password";
    x.setAttribute("id","Faa");
    x.classList.add("Faa");
    document.getElementById("message").appendChild(x);
    ver=1;
    
}
}

}  









/*pour s'inscrire    ajouter compte  */ 
function Ajouter()
{
    event.preventDefault();
    //recuperer les valeurs des inputs
    var nomm=document.getElementById("nom").value;
    var mdp=document.getElementById("pass").value;
    // creer l objet
    var utilisateur={
        "user":nomm,
        "pass":cryptPass(mdp),
    };

    // stocker l objet dans le localstorage
    localStorage.setItem(nomm,JSON.stringify(utilisateur));
    console.log('-------------------------------------');
  


}



/*  des fonctions pour vider les inputs l orsqu on clique une deuxieme fois  */ 

function fct1(){
    document.getElementById("nom").value="";
    
}





function fct3(){
  
    document.getElementById('message').innerHTML = "";

    ver=0;
}

function fct4(){
   
    document.getElementById('message').innerHTML = "";

    ver=0;ver2=0;
}









//fonction de hasgage 
const cryptPass = function(str) {
    const hs=[0xdeadbeef ^ 0,0x41c6ce57 ^ 0,0xfae69b63 ^ 0,0xbadcaffe ^ 0];
    const imu2prm=[2654435761,1597334677,9745628194,6219433873,
                   2246822507,3266489909,9807643451,4576128788];
    let hash,i,ch;
    for (i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        for(let j=0;j<4;j++){
            hs[j] = Math.imul(hs[j] ^ ch, imu2prm[j]);
        }
    }  
    for(i=0;i<4;i+=2){
        hs[i] = Math.imul(hs[i] ^ (hs[i]<<32), imu2prm[i+4]) ^ Math.imul(hs[i+1] ^ (hs[i+1]<<9), imu2prm[i+5]);
        hs[i+1] = Math.imul(hs[i+1] ^ (hs[i+1]<<32), imu2prm[i+4]) ^ Math.imul(hs[i] ^ (hs[i]<<9), imu2prm[i+5]);
    } 

    hash=(hs[1]>>>0).toString(32).padStart(16,(hs[2]>>>0).toString(16).padStart(8,0));
    hash+=(hs[0]>>>0).toString(32).padStart(16,(hs[3]>>>0).toString(16).padStart(8,0));
    return hash;
 };