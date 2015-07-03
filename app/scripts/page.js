(function($) {
    $('#myTabs a').click(function (e) {
    console.log(546546);
      e.preventDefault()
      var href = $(this).attr('data-href');
      $(href).tab('show')
  });
})();
