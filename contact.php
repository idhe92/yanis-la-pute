<section class="contact" id="contact">
  <h2>Contact</h2>
  <p>Whether you're interested in working with me or just want to say hello, i'd love to hear from you!</p>
  <br>
</div>

<div class="formulaire">
  <form method="POST" action="index.php">
    <input type="text" name="nom" placeholder="NOM" maxlength="25">
    <input type="text" name="email" placeholder="EMAIL" maxlength="40">
    <input type="text" name="objet" placeholder="OBJET" maxlength="30">
    <textarea name="message" placeholder="MESSAGE" minlength="10" maxlength="1000"></textarea>
</div>
<div class="file-input">       
    <input type="file" name="pj">
    <span class="button">P.J</span>
    <span class="label" data-js-label>Aucun fichier sélectionné</label>
</div>
    <input class="boutton"  type="submit" name="envoi" value="Envoyer">
  </form>
</section>

<?php

//require_once('PHPMailer/src/PHPMailer.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if (isset($_POST['envoi']))
{

// formulaire envoyé, on récupère tous les champs.
$nom     = htmlspecialchars ($_POST['nom']);
$email   = htmlspecialchars ($_POST['email']);   
$objet   = htmlspecialchars ($_POST['objet']);
$message = htmlspecialchars ($_POST['message']);
$pj      = htmlspecialchars($_POST['pj']); 




  if ( (!empty($nom)) && (!empty($email))  && (!empty($objet))  && (!empty($message)) )
  {
    // Creation de l'objet
    $mail = new PHPMailer(true);

    $mail -> isSMTP();
    $mail->SMTPSecure = 'tls';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
//or more succinctly:
    $mail->Host = 'tls://smtp.gmail.com:587';
    $mail -> SMTPAuth = true;
    $mail -> Username = 'yanis.haddad92600@gmail.com';
    $mail -> Password = 'Sofiana1994';

    $mail -> Port = 25;

    

    // Encodage
    $mail -> CharSet = "utf-8";

    //expéditeur , Adresse de retour , destinataire
    $mail -> SetFrom('yanis.haddad92600@gmail.com');
    $mail -> AddReplyTo($email);
    $mail -> AddAddress('yanis.haddad92600@gmail.com');


    // Format HTML
    $mail -> IsHTML(true);

    //Sujet , Le message
    $mail -> Subject = $objet;
    $mail -> Body = $message;

    //La P.J
    if (!$pj) {
    } 
    else{
      $mail -> AddAttachment($pj);
    }
        
    if(!$mail -> Send()) {
      echo "Message non envoyé réessayer";
      echo "Mailer Error : " . $mail -> ErrorInfo;
    } else {
      echo "Message envoyé";
    }
  }
}; 


?>

<a href="#top" class="to-top"></a>