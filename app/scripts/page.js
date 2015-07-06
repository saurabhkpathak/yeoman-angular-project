'use strict';
(function($) {
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('data-href');
        $(href).tab('show');
    });
})(jQuery);
