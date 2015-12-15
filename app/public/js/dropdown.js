$(document).ready(function(){
  var nav_icon = $("nav.primary i.fa");
  var nav_drop = $("nav.primary ul");

  $(nav_icon).click(function() {
    $(this).toggleClass("fa-bars fa-close");
    //debugger
    if(nav_icon.hasClass("fa-close")) {  
      $(nav_drop).fadeIn();
    } else {
      $(nav_drop).fadeOut();
    }
  });
});