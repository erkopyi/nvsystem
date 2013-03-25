function hinnakiri(s){
var Valve = {
	central:[
		{name: "Paradox", price:100, zone:6, family:"paradox"},
		{name: "Dsc", price:110, zone:6, type:"DSC"}
	],
	keypad:[
		{type: "LCD", price:100, family:["paradox"]}
	],
	sensors:[
		{type: "motion", price: 10},
		{type: "door", price: 11},
		{type: "glass", price: 12},
		{type: "smoke", price: 13},
		{type: "heat", price: 14},
		{type: "water", price: 15}
	],
	sirens:[
		{type: "indoor", price: 10},
		{type: "outdoor", price: 20}
	]
}

	var inside_html = liquid(document.getElementById("products").innerHTML)
	document.getElementById(s).innerHTML = inside_html(Valve);
}
