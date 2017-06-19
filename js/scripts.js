var bank = {
	eth: 10.9976,
	golem: 986.518,
	iota: 1320.066,
	humaniq: 1693.512,
	guppy: 990.589
}

var prices = {};


var header_width = function(type) {
	var a = "#"+type+"_currency_container";
	var b = $(a + " > table").width();
	$(a).css({"width": b+"px","textAlign":"center"});
};

var resultColor = function(type,result){
	var a = "#"+type+"_currency_container";
	if (result >= 0) {
		$(a).css({"borderColor":"#00ff00","color":"#00ff00"});
	} else if (a === 0)  {
		$(a).css({"borderColor":"#00ff00","color":"#ffffff"});
	} else {
		$(a).css({"borderColor":"#ff3300","color":"#ff3300"});
	}
};

var setTitle = function(){
	document.title = "Total - $" + sum.toFixed(2);
}

var sum = 0;



var setBalance = function(type,label) {
	var a = $("#balance_id");
	var price = prices[type];
	var amount = bank[type];
	a.append('<li>'+label+': $'+parseFloat((price*amount)).toFixed(2)+'</li>');
	var b = parseFloat(price*amount)
	sum += b;
};

var balanceTotal = function() {
	$("#balance_total").html('<ul><li> Total: $'+sum.toFixed(2)+'</li></ul>')
	setTitle();
};


var ethResult,ethPrice;
var eth = function() {
	$.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/', function(data) {
			$("#eth").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
			$("#eth").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
			$("#eth").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
			$("#eth").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
			$("#eth").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
			ethResult = parseFloat(data[0].percent_change_24h);
			ethPrice = data[0].price_usd;
			prices.eth = ethPrice;
	})
	.done(function(){
		header_width("eth");
		resultColor("eth",ethResult);
		setTitle();
		setBalance("eth","Ethereum");
		balanceTotal();
	});
};

var golemResult,golemPrice;
var golem = function() {
	$.getJSON('https://api.coinmarketcap.com/v1/ticker/golem-network-tokens/', function(data) {
			$("#golem").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
			$("#golem").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
			$("#golem").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
			$("#golem").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
			$("#golem").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
			golemResult = parseFloat(data[0].percent_change_24h);
			golemPrice = data[0].price_usd;
			prices.golem = golemPrice;
	})
	.done(function(){
		header_width("golem");
		resultColor("golem",golemResult);
		setBalance("golem","Golem");
		balanceTotal();
	});
};

var iotaResult,iotaPrice;
var iota = function() {
	$.getJSON('https://api.coinmarketcap.com/v1/ticker/iota/', function(data) {
			$("#iota").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
			$("#iota").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
			$("#iota").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
			$("#iota").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
			$("#iota").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
			iotaResult = parseFloat(data[0].percent_change_24h);
			iotaPrice = data[0].price_usd;
			prices.iota = iotaPrice;
	})
	.done(function(){
		header_width("iota");
		resultColor("iota",iotaResult);
		setBalance("iota","IOTA");
		balanceTotal();
	});
};

var humaniqResult,humaniqPrice;
var humaniq = function() {
	$.getJSON('https://api.coinmarketcap.com/v1/ticker/humaniq/', function(data) {
			$("#humaniq").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
			$("#humaniq").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
			$("#humaniq").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
			$("#humaniq").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
			$("#humaniq").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
			humaniqResult = parseFloat(data[0].percent_change_24h);
			humaniqPrice = data[0].price_usd;
			prices.humaniq = humaniqPrice;
	})
	.done(function(){
		header_width("humaniq");
		resultColor("humaniq",humaniqResult);
		setBalance("humaniq","Humaniq");
		balanceTotal();
	});
};

var guppyResult,guppyPrice;
var guppy = function() {
	$.getJSON('https://api.coinmarketcap.com/v1/ticker/guppy/', function(data) {
			$("#guppy").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
			$("#guppy").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
			$("#guppy").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
			$("#guppy").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
			$("#guppy").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
			guppyResult = parseFloat(data[0].percent_change_24h);
			guppyPrice = data[0].price_usd;
			prices.guppy = guppyPrice;
	})
	.done(function(){
		header_width("guppy");
		resultColor("guppy",guppyResult);
		setBalance("guppy","Matchpool");
		balanceTotal();
	});
};



var pageWidth = function(){
	var a = $(window).width();
	if (a <= 480) {
		$(".table_head").css({"width":a/1.1,"textAlign":"center"});
		$(".table_head > table").css("width",a/1.1);
	} else if (a <= 768) {
		$(".table_head").css({"width":a/2.1,"textAlign":"center"});
		$(".table_head > table").css("width",a/2.1);	
	} else {	
		$(".table_head").css({"width":a/3.1,"textAlign":"center"});
		$(".table_head > table").css("width",a/3.1);
	}
}


$(document).ready(function(){
	pageWidth();
	eth();
	golem();
	iota();
	humaniq();
	guppy();
});

$(window).resize(function(){
	pageWidth();
});

