<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "a-gym-website";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
