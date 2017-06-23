 <?php include 'config/db.php'; ?>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!--<meta http-equiv="refresh" content="60" />-->
  <meta http-equiv="cache-control" content="max-age=0" />
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="expires" content="0" />
  <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
  <meta http-equiv="pragma" content="no-cache" />
    <title>Crypto Ticker</title>
  <!--<link rel="stylesheet" href="//fonts.googleapis.com/css?family=font1|font2|etc" type="text/css">-->
  <link rel="stylesheet" href="css/styles.css" type="text/css"> <!--Desktop-->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="js/scripts.js"></script>
  </head>
  <body>
  <h1 id ="head">Crypto Ticker</h1>
	  <div id = 'eth_currency_container' class="table_head">
		<u>Ethereum (ETH)</u>
		  <table id="eth">
		  <tr><td>LOADING...</td></tr>
		  </table>
	  </div>
	  <div id = 'golem_currency_container' class="table_head">
		<u>Golem (GNT)</u>
		  <table id="golem">
		  <tr><td>LOADING...</td></tr>
		  </table>
	  </div>
	  <div id = 'iota_currency_container' class="table_head">
		<u>IOTA (MIOTA)</u>
		  <table id="iota">
		  <tr><td>LOADING...</td></tr>
		  </table>
	  </div>
	  <div id = 'humaniq_currency_container' class="table_head">
		<u>Humaniq (HMQ)</u>
		  <table id="humaniq">
		  <tr><td>LOADING...</td></tr>
		  </table>
	  </div>
	  <div id = 'guppy_currency_container' class="table_head">
		<u>Matchpool (GUP)</u>
		  <table id="guppy">
		  <tr><td>LOADING...</td></tr>
		  </table>
	  </div>
          <div id = 'ant_currency_container' class="table_head">
                <u>ANT Shares (ANS)</u>
                  <table id="ant">
                  <tr><td>LOADING...</td></tr>
                  </table>
          </div>
          <div id = 'lbc_currency_container' class="table_head">
                <u>LBRY Credits (LBC)</u>
                  <table id="lbc">
                  <tr><td>LOADING...</td></tr>
                  </table>
          </div>
          <div id = 'ltc_currency_container' class="table_head">
                <u>Litecoin (LTC)</u>
                  <table id="ltc">
                  <tr><td>LOADING...</td></tr>
                  </table>
          </div>
          <div id = 'sia_currency_container' class="table_head">
                <u>Siacoin (SC)</u>
                  <table id="sia">
                  <tr><td>LOADING...</td></tr>
                  </table>
          </div>
          <div id = 'nxt_currency_container' class="table_head">
                <u>NXT (NXT)</u>
                  <table id="nxt">
                  <tr><td>LOADING...</td></tr>
                  </table>
          </div>
	  <div id ="balances">
		<h1 id="head" >Balance</h1>
		<ul id = "balance_id">
		</ul>
		<p id ="balance_total">
		</p>
	  </div>
<?php
	/*if (htmlspecialchars($_GET["user"])) {
	$param =  htmlspecialchars($_GET["user"]);
	} 
	$sql = "SELECT * FROM BALANCE WHERE PERSON_ID = (SELECT ID FROM PEOPLE WHERE USERNAME ='" . $param . "'";
	$result =  mysqli_query($link,$sql);
	
	if ($result->num_rows > 0) {
    // output data of each row
    	while($row = $result->fetch_assoc()) {
        echo "<br> Person ". $row["PERSON)ID"]. " - Coin: ". $row["COIN_ID"];
	}
	} else {
    	echo "0 results";
	}


	mysqli_close($link);
 */?>

   </body>
</html>
