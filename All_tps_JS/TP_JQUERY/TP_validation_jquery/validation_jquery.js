$(document).ready(function(){

      //cacher les messages a afficher
            $("#fname_error_message").hide();
            $("#sname_error_message").hide();
            $("#email_error_message").hide();
            $("#password_error_message").hide();
            $("#password_true_message").hide();
            $("#retype_password_error_message1").hide();
            $("#retype_password_error_message2").hide();
            $("#retype_password_error_message3").hide();
            $("#retype_password_error_message4").hide();
            $("#retype_password_error_message5").hide();

            /*initialiser les variables qui sont liees au message pour verifier la forme a la fin */
            let error_fname = false;
            let error_sname = false;
            let error_email = false;
            let error_password = false;
            let error_retype_password = false;


            //verification du first name
            $("#form_fname").focusout(function(){
                          verify_nom();
            });

            //verification du secand name
            $("#form_sname").focusout(function() {
                         verify_snom();
            });

            //verification du mail
            $("#form_email").focusout(function() {
                         verify_email();
            });

            //verification du mot de passe
            $("#form_password").focusout(function() {
                        verify_password();
            });

         //verification du repitition du mot de passe
            $("#form_retype_password").focusout(function() {
                         verify_retype_password();
            });

            


   // fonction de verification du first name
            function verify_nom() {

                     //mon expression reguliere
                     var pattern = /^(([a-zèéêîïçÿ]+)?(\b(\-|'))?(\b\s+)?([a-zèéêîïçÿ]+?)(\s+)?)+$/gi;

                     // variable qui contient la valeur du premiere input
                     var fname = $("#form_fname").val();
                     
                     //tester si la valeur recupere match l expression reguliere ou non
                     if (pattern.test(fname) && fname !== '') {
                        // si le cas on cache le message d erreur
                        $("#fname_error_message").hide();
                        $("#form_fname").css("border-bottom","2px solid #34F458");
                        $("#fname_true_message1").html(" bien ");
                        $("#fname_true_message1").show();
                     } else {
                        // si non on affiche le message d erreur
                        $("#fname_error_message").html("nom invalide !");
                        $("#fname_error_message").show();
                        $("#form_fname").css("border-bottom","2px solid #F90A0A");
                        $("#fname_true_message1").hide();

                        // valider le nom
                        error_fname = true;
                     }
            }
            
            // fonction de validation du secand name
            function verify_snom() {

                     // mon expression reguliere
                     var pattern = /^(([a-zèéêîïçÿ]+)?(\b(\-|'))?(\b\s+)?([a-zèéêîïçÿ]+?)(\s+)?)+$/gi;
                     // recuperer la valeur de l input
                     var sname = $("#form_sname").val()
                     // tester si la valeur recuperer match l expression reguliere ou non
                     if (pattern.test(sname) && sname !== '') {
                        // si le cas on cache le message d erreur
                        $("#sname_error_message").hide();
                        $("#form_sname").css("border-bottom","2px solid #34F458");
                        $("#fname_true_message2").html(" bien ");
                        $("#fname_true_message2").show();
                     } else {
                        // si non on affiche le message d errur
                        $("#sname_error_message").html("prenom invalide!");
                        $("#sname_error_message").show();
                        $("#form_sname").css("border-bottom","2px solid #F90A0A");
                        $("#fname_true_message2").hide();
                        // on valide secand name
                        error_fname = true;
                     }
            }



            // fonction qui teste la validation du password
            function verify_password() {
                     // recuperer la longuur du valeur de l input concerne par le mot de passe
                     var password_length = $("#form_password").val().length;
                     // verifier que la longueur du mot de passe>8
                     if (password_length < 8) {
                        // si le mot de passe <8 afficher le message d erreur
                        $("#password_error_message").html("Atleast 8 Characters");
                        $("#password_error_message").show();
                        $("#form_password").css("border-bottom","2px solid #F90A0A");
                        $("#fname_true_message4").hide();
                        error_password = true;
                     } else {
                        // sinon cacher le message
                        $("#password_error_message").hide();
                        $("#form_password").css("border-bottom","2px solid #34F458");
                        $("#fname_true_message4").html(" bien ");
                        $("#fname_true_message4").show();
                     }
            }

            // fonction de verification du repitition de mot de passe 

            function verify_retype_password() {
                     // recuperer la valeur de l input de mot de passe
                     var password = $("#form_password").val();
                     var retype_password = $("#form_retype_password").val();
                     // si les deux mots de passe sont differents
                     if (password !== retype_password) {
                        // si le cas afficher le messages d erreur
                        $("#retype_password_error_message").html("Passwords Did not Matched");
                        $("#retype_password_error_message").show();
                        $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
                        $("#fname_true_message5").hide();
                        error_retype_password = true;
                     } else {
                        // sinon cacher les messages d erreur
                        $("#retype_password_error_message").hide();
                        $("#form_retype_password").css("border-bottom","2px solid #34F458");
                        $("#fname_true_message5").html(" bien ");
                        $("#fname_true_message5").show();
                     }
            }

            // fonction qui verifier l email
            function verify_email() {
                     // mon expression reguliere
                     var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                     //recuperer la valeur de l input de email
                     var email = $("#form_email").val();
                     // teste de validation
                     if (pattern.test(email) && email !== '') {
                        // cacher le message d erreur
                        $("#email_error_message").hide();
                        $("#form_email").css("border-bottom","2px solid #34F458");
                        $("#fname_true_message3").html(" bien ");
                        $("#fname_true_message3").show();
                     } else {
                        // afficher le message d erreur
                        $("#email_error_message").html("Invalid Email");
                        $("#email_error_message").show();
                        $("#form_email").css("border-bottom","2px solid #F90A0A");
                        $("#fname_true_message3").hide();
                        error_email = true;
                     }
            }


            // verification du form
            $("#validation_form").submit(function() {
                     error_fname = false;
                     error_sname = false;
                     error_email = false;
                     error_password = false;
                     error_retype_password = false;

                     verify_nom();
                     verify_snom();
                     verify_email();
                     verify_password();
                     verify_retype_password();

                     // verifier tous les elements de mla form
                     if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
                        alert("Registration Successfull");
                        return true;
                     } else {
                        alert("Please Fill the form Correctly");
                        return false;
                     }


            });
      });