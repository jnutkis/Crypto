<?php
$servername = "localhost";
$username = "cryptoadmin";
$password = "Nutkisnutkis1!";
$dbname = 'cryptoDB';
$charset = 'utf8';

$dsn = "mysql:host=$servername;dbname=$dbname;charset=$charset";
$opt = [
	PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES   => false,
];


$pdo = new PDO($dsn,$username,$password,$opt);
#echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
#echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;
$param = $_GET["name"];
$query = $pdo->prepare('SELECT COINS.LONG_NAME,BALANCE.AMOUNT FROM BALANCE JOIN PEOPLE ON BALANCE.PERSON_ID = PEOPLE.ID JOIN COINS ON BALANCE.COIN_ID = COINS.ID WHERE PEOPLE.USERNAME = ?');
$query->execute([$param]);
while ($row = $query->fetch()) {
	#echo "<p>" . $row['LONG_NAME'] . " - " . $row['AMOUNT'] . "</p>";
}

#mysqli_close($link);
?>
