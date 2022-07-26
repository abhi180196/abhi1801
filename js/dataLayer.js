var digitalData = {

     page: {
   
        pageInfo: {
   
              
            pageName: document.title,
              
   
            referringURL: document.referrer,
   
            
        }
   
      
   
        },
   
        userInfo : {
   
           loginStatus : "false",
   
           username : "",
   
           bannerClick : "false"
   
    }
   
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