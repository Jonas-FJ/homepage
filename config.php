<?php
$servername = "***REMOVED***";
$username = "***REMOVED***";
$password = "***REMOVED***";
$dbname = "***REMOVED***";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM timeline";
// Execute the SQL query
$result = $conn->query($sql);

// Process the result set
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Title: " . $row["title"]. " " . $row["description"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
