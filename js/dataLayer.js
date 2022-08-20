//DATA LAYER
// window.adobeDataLayer = window.adobeDataLayer || [];

var pagename = document.title;
var url = document.URL;
var host = window.location.host;
var d1 = new Date(); 
var currDate = d1.toISOString().slice(0, 10);
var currTime = d1.toLocaleTimeString();
var currDevice = "";
if(screen.width <= 421)
	currDevice = "Mobile";
else if (screen.width > 421 && screen.width <= 1023)
	currDevice = "Tablet";
else
	currDevice = "Desktop";

setInterval(() => {
	d1 = new Date()
	currTime = d1.toLocaleTimeString()
}, 1000);
window.digitalData = {
		page: {
			pageName: pagename,
			referringURL: document.referrer,
			pageURL : url,
			deviceType: currDevice,
			page_level: 3,
		},
		category: {
			primaryCategory: "",
			subCategory1: "",
			subCategory2: "",
			subCategory3: "",

		},
		attributes: {
			country: "IN",
			date: currDate,
			time: currTime,
			domain: host
		},
		user:{
			loginStatus: "false",
			username : "",
			bannerClick : "false"
		},
		product : [],
}

var username = localStorage.getItem("username");
   
   var loggedInStatus = localStorage.getItem("loginStatus");
   
   if(username && loggedInStatus) {
   
       digitalData.userInfo.loginStatus = loggedInStatus;
   
       digitalData.userInfo.username = username;
   
   }

if(localStorage.getItem("bannerClick")){
   
       digitalData.userInfo.bannerClick = localStorage.getItem("bannerClick")
   
   }

