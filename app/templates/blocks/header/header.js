// шпионское меню со скроллом
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight()+0,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

menuItems.click(function(e){
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({scrollTop: offsetTop}, 300);
  e.preventDefault();
});

$(window).scroll(function(){
  var fromTop = $(this).scrollTop()+topMenuHeight;
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent(".header_nav_item").removeClass("active")
      .end().filter('[href="#'+id+'"]').parent(".header_nav_item").addClass("active");
  }
});
// /шпионское меню со скроллом

(function(){

  $('._nav-hamburger').click(function(e) {
    e.preventDefault();
    $(this).closest('header').toggleClass('open');
  });

})();
