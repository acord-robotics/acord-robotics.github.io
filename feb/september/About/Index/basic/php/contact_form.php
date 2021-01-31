<?php
    $to = 'myemail@email.com';
    $subject = 'New message from SOLID';

    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH']  == 'XMLHttpRequest') {
        $name = $_POST["fullname"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $mailbody = "
                <head>
                    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>
                </head>
                <body style='font-family:Verdana;background:#f2f2f2;color:#606060;'>

                    <style>
                        h3 {
                            font-weight: bold;
                            color: #EAB543;
                            margin-bottom: 0;
                            font-size: 14px;
                        }
                        a , h2 {
                            color: #000000;
                        }
                        p {
                            margin-top: 5px;
                            line-height:1.5;
                            font-size: 14px;
                        }
                    </style>

                    <table cellpadding='0' width='100%' cellspacing='0' border='0'>
                        <tr>
                            <td>
                                <table cellpadding='0' cellspacing='0' border='0' align='center' width='100%' style='border-collapse:collapse;'>
                                    <tr>
                                        <td>

                                            <div>
                                                <table cellpadding='0' cellspacing='0' border='0' align='center'  style='width: 100%;max-width:600px;background:#FFFFFF;margin:0 auto;border-radius:5px;padding:50px 30px'>
                                                    <tr>
                                                        <td width='100%' colspan='3' align='left' style='padding-bottom:0;'>
                                                            <div>
                                                                <h2>New message</h2>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width='100%' align='left' style='padding-bottom:30px;'>
                                                            <div>
                                                                <p>Hello, you've just received a new message sent from the contact form on your website.</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width='100%' align='left' style='padding-bottom:20px;'>
                                                            <div>
                                                                <h3>From</h3>
                                                                <p>$name</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width='100%' align='left' style='padding-bottom:20px;'>
                                                            <div>
                                                                <h3>Email Address</h3>
                                                                <p>$email</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width='100%' align='left' style='padding-bottom:20px;'>
                                                            <div>
                                                                <h3>Message</h3>
                                                                <p>$message</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div style='margin-top:30px;text-align:center;color:#b3b3b3'>
                                                <p style='font-size:12px;'>2019-2XXX Madeon08®, All Rights Reserved.</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>";

        // prepare headers
        $headers  = 'MIME-Version: 1.1' . PHP_EOL;
        $headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
        $headers .= "From: $name <$email>" . PHP_EOL;
        $headers .= "Return-Path: $to" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

        // If there are no errors, send the email
        $result = @mail($to, $subject, $mailbody, $headers);
    } else {
        errorHandler('Allowed only XMLHttpRequest.');
    }
?>