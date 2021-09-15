<?php

 $n = json_decode(file_get_contents("php://input"), true);

 print_r($n);

 echo '<br><br>';

 echo 'name: '.$n['name'] . '<br>';
 echo 'age: '.$n['age'] . '<br>';
 echo 'gender: '.$n['gender'] . '<br>';

?>
