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

$balances = $pdo->query('SELECT * FROM PEOPLE');
while ($row = $balances->fetch()) {
	echo $row['ID'] . " - " . $row['USERNAME'] . "\n";

}
#mysqli_close($link);
?>
