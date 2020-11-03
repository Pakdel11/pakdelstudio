<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];
    }

    $mailTO = "habib.pakdel1121@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

        // $toEmail = 'expressdesign1121@gmail.com';
        // $subjectt = 'Contact Request From '.$name;
        // $body = '<h2>Contact Request</h2>
        //     <h4>Name</h4><p>'.$name.'</p>
        //     <h4>Subject</h4><p>'.$subject.'</p>
        //     <h4>Email</h4><p>'.$mailFrom.'</p>
        //     <h4>Message</h4><p>'.$message.'</p>
        // ';

        // // Email Headers
        // $headers = "MIME-Version: 1.0" ."\r\n";
        // $headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";

        // Additional Headers

		// if (mail($mailTO, $headers, $txt)){
        //     echo '<script type="text/javascript">
        //     swal("Sent","Mail has been send", "success");
        //     </script>';
        // }else {
        //     echo '<script type="text/javascript">
        //     swal("Fielt","Mail has not been send", "error");
        //     </script>';
        // }
        mail($headers, $mailTO, $txt);

        header("location:index.html?");

?>