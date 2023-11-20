<?php
require_once '../config/database.php';
require_once '../objects/user.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// instantiate user object
$user = new User($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set user property values
$user->email = $data->email;
$email_exists = $user->emailExists();

if ($email_exists && password_verify($data->password, $user->password)) {
    http_response_code(200);
    echo json_encode(array("message" => "Login successful."));
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Login failed."));
}
?>
