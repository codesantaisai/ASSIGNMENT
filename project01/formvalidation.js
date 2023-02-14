//form validation
function validate() {
    var fullName=document.getElementById("fullname").value;
    var lastName=document.getElementById("lastname").value;
    var validEmail=document.getElementById("valid-email").value;
    var mobile=document.getElementById("telephone").value;
  
    var regExname=/^[A-Za-z]{2,23}/;
    var regExemail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regExmobile=/^[0-9]{10}/;
  
    if(regExname.test(fullName)){
        document.getElementById("para1").innerHTML="";
    }
    else{
        document.getElementById("para1").innerHTML="Name Not Valid";
        return false;
    }
  
    if(regExname.test(lastName)){
      document.getElementById("para3").innerHTML="";
  }
  else{
      document.getElementById("para3").innerHTML="Name Not Valid";
      return false;
  }
  
  
    if(regExemail.test(validEmail)){
        document.getElementById("para2").innerHTML="";
    }
    else{
        document.getElementById("para2").innerHTML="Enter valid Email address";
        return false;
    }
  
  
    if(regExmobile.test(mobile)){
        document.getElementById("para4").innerHTML="";
    }
    else{
        document.getElementById("para4").innerHTML="Invalid mobile number";
        return false;
    }
  }
//map starts here
  // Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 9.665190, lng: 80.020090 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;



  