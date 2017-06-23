var bank = {
        eth: 10.9976,
        golem: 986.518,
        iota: 1320.066,
        humaniq: 1693.512,
        guppy: 990.589,
        ant: 22.22474385,
        lbc: 262.19006486,
        ltc: 21.59816186,
        sia: 12979.12654746,
        nxt: 1405.77248569
}

var prices = {};
var totalBalance = {};

var header_width = function(type) {
        var a = "#"+type+"_currency_container";
        var b = $(a + " > table").width();
        $(a).css({"width": b+"px","textAlign":"center"});
};

var resultColor = function(type,result,one_result){
        var a = "#"+type+"_currency_container";
        if (result >= 0) {
			if(one_result >= 0) {
                $(a).css({"borderColor":"#00ff00","color":"#00ff00"});
			} else {
				$(a).css({"borderColor":"#4256f4","color":"#4256f4"});
			}
		} else {
			if(one_result < 0) {
                $(a).css({"borderColor":"#ff3300","color":"#ff3300"});
			} else {
				$(a).css({"borderColor":"#f4f94a","color":"#f4f94a"});
        }
	}
};

var setTitle = function(){
        document.title = "Total - $" + sum.toFixed(2);
}

var sum = 0;

var setBalanceNew = function(obj) {
        var a = Object.keys(obj);
        var b = [];
        for (var i = 0;i<a.length;i++) {
                if(obj[a[i]]>0) {
                        b.push(Object.keys(obj)[i])
                }
        }
        var c = $("#balance_id");
        for (var i = 0;i < b.length;i++) {
                var d = "#balance_id > li#" + b[i];
                if ($(d).length === 0) {
                        c.append("<li id ='"+b[i]+"'></li>")
                }
        }
}

var setBalance = function(type,label) {
        var a = "li#"+type;
        var price = prices[type];
        var amount = bank[type];
        /*a.append('<li>'+label+': $'+parseFloat((price*amount)).toFixed(2)+'</li>');*/
        $(a).html(label+': $'+parseFloat((price*amount)).toFixed(2));
        var b = parseFloat(price*amount)
        totalBalance[type]=b;
};

var getBalanceTotal = function() {
        sum = 0;
        var a = Object.values(totalBalance);
        for (var i = 0;i < a.length; i++) {
                sum += a[i];
        }
         $("#balance_total").html('<ul><li> Total: $'+sum.toFixed(2)+'</li></ul>')
        setTitle();
}

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
						ethOne = parseFloat(data[0].percent_change_1h)
                        ethPrice = data[0].price_usd;
                        prices.eth = ethPrice;
        })
        .done(function(){
                header_width("eth");
                resultColor("eth",ethResult,ethOne);
                setTitle();
                setBalance("eth","Ethereum");
                getBalanceTotal();
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
						golemOne = parseFloat(data[0].percent_change_1h)
                        golemPrice = data[0].price_usd;
                        prices.golem = golemPrice;
        })
        .done(function(){
                header_width("golem");
                resultColor("golem",golemResult,golemOne);
                setBalance("golem","Golem");
                getBalanceTotal();
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
						iotaOne = parseFloat(data[0].percent_change_1h)
                        iotaPrice = data[0].price_usd;
                        prices.iota = iotaPrice;
        })
        .done(function(){
                header_width("iota");
                resultColor("iota",iotaResult,iotaOne);
                setBalance("iota","IOTA");
                getBalanceTotal();
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
						humaniqOne = parseFloat(data[0].percent_change_1h)
                        humaniqPrice = data[0].price_usd;
                        prices.humaniq = humaniqPrice;
        })
        .done(function(){
                header_width("humaniq");
                resultColor("humaniq",humaniqResult,humaniqOne);
                setBalance("humaniq","Humaniq");
                getBalanceTotal();
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
						guppyOne = parseFloat(data[0].percent_change_1h)
                        guppyPrice = data[0].price_usd;
                        prices.guppy = guppyPrice;
        })
        .done(function(){
                header_width("guppy");
                resultColor("guppy",guppyResult,guppyOne);
                setBalance("guppy","Matchpool");
                getBalanceTotal();
        });
};

var antResult,antPrice;
var ant = function() {
        $.getJSON('https://api.coinmarketcap.com/v1/ticker/antshares/', function(data) {
                        $("#ant").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
                        $("#ant").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
                        $("#ant").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
                        $("#ant").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
                        $("#ant").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
                        antResult = parseFloat(data[0].percent_change_24h);
						antOne = parseFloat(data[0].percent_change_1h)
                        antPrice = data[0].price_usd;
                        prices.ant = antPrice;
        })
        .done(function(){
                header_width("ant");
                resultColor("ant",antResult,antOne);
                setBalance("ant","ANT Shares");
                getBalanceTotal();
        });
};

var lbcResult,lbcPrice;
var lbc = function() {
        $.getJSON('https://api.coinmarketcap.com/v1/ticker/library-credit/', function(data) {
                        $("#lbc").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
                        $("#lbc").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
                        $("#lbc").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
                        $("#lbc").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
                        $("#lbc").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
                        lbcResult = parseFloat(data[0].percent_change_24h);
						lbcOne = parseFloat(data[0].percent_change_1h)
                        lbcPrice = data[0].price_usd;
                        prices.lbc = lbcPrice;
        })
        .done(function(){
                header_width("lbc");
                resultColor("lbc",lbcResult,lbcOne);
                setBalance("lbc","LBRY Credits");
                getBalanceTotal();
        });
};

var ltcResult,ltcPrice;
var ltc = function() {
        $.getJSON('https://api.coinmarketcap.com/v1/ticker/litecoin/', function(data) {
                        $("#ltc").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
                        $("#ltc").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
                        $("#ltc").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
                        $("#ltc").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
                        $("#ltc").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
                        ltcResult = parseFloat(data[0].percent_change_24h);
						ltcOne = parseFloat(data[0].percent_change_1h)
                        ltcPrice = data[0].price_usd;
                        prices.ltc = ltcPrice;
        })
        .done(function(){
                header_width("ltc");
                resultColor("ltc",ltcResult,ltcOne);
                setBalance("ltc","Litecoin");
                getBalanceTotal();
        });
};

var siaResult,siaPrice;
var sia = function() {
        $.getJSON('https://api.coinmarketcap.com/v1/ticker/siacoin/', function(data) {
                        $("#sia").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
                        $("#sia").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
                        $("#sia").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
                        $("#sia").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
                        $("#sia").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
                        siaResult = parseFloat(data[0].percent_change_24h);
						siaOne = parseFloat(data[0].percent_change_1h)
                        siaPrice = data[0].price_usd;
                        prices.sia = siaPrice;
        })
        .done(function(){
                header_width("sia");
                resultColor("sia",siaResult,siaOne);
                setTitle();
                setBalance("sia","Siacoin");
                getBalanceTotal();
        });
};

var nxtResult,nxtPrice;
var nxt = function() {
        $.getJSON('https://api.coinmarketcap.com/v1/ticker/nxt/', function(data) {
                        $("#nxt").html('<tr><td class ="col_1"> Price USD:</td><td class ="col_2"> $' + data[0].price_usd + ' </td></tr>');
                        $("#nxt").append('<tr><td class="col_1"> Price BTC:</td><td class ="col_2">' + data[0].price_btc + ' </td></tr>');
                        $("#nxt").append('<tr><td class="col_1"> 1H Price %:</td><td class ="col_2">' + data[0].percent_change_1h + '% </td></tr>');
                        $("#nxt").append('<tr><td class="col_1"> 24H Price %:</td><td class ="col_2">' + data[0].percent_change_24h + '% </td></tr>');
                        $("#nxt").append('<tr><td class="col_1"> 24H Volume: </td><td class ="col_2">' + parseInt(data[0]['24h_volume_usd']) + ' </td></tr>');
                        nxtResult = parseFloat(data[0].percent_change_24h);
						nxtOne = parseFloat(data[0].percent_change_1h)
                        nxtPrice = data[0].price_usd;
                        prices.nxt = nxtPrice;
        })
        .done(function(){
                header_width("nxt");
                resultColor("nxt",nxtResult,nxtOne);
                setTitle();
                setBalance("nxt","NXT");
                getBalanceTotal();
        });
};

var pageWidth = function(){
        var a = $(window).width();
        if (a <= 480) {
                $(".table_head").css({"width":a/1.1,"textAlign":"center"});
                $(".table_head > table").css("width",a/1.1);
        } else if (a <= 928) {
                $(".table_head").css({"width":a/2.1,"textAlign":"center"});
                $(".table_head > table").css("width",a/2.1);
        } else if (a <= 1487) {
                $(".table_head").css({"width":a/3.1,"textAlign":"center"});
                $(".table_head > table").css("width",a/3.1);
        } else {
                $(".table_head").css({"width":a/4.1,"textAlign":"center"});
                $(".table_head > table").css("width",a/4.1);
        }

}


$(document).ready(function(){
        pageWidth();
        setBalanceNew(bank);
        eth();
        golem();
        iota();
        humaniq();
        guppy();
        ant();
        lbc();
        ltc();
        sia();
        nxt();
        setInterval(function(){eth();golem();iota();humaniq();guppy();ant();lbc();ltc();sia();nxt();},10000);
});

$(window).resize(function(){
        pageWidth();
});

