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
$user->name = $data->name;
$user->email = $data->email;
$user->password = password_hash($data->password, PASSWORD_BCRYPT);

// create the user
if ($user->create()) {
    http_response_code(201);
    echo json_encode(array("message" => "User was created."));
} else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to register user."));
}
?>
