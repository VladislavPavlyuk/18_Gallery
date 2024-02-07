
;(function($) {

  $.fn.zoomImage = function(paras) {

      var defaultParas = {
          layerW: 100, 
          layerH: 100, 
          layerOpacity: 0.2, 
          layerBgc: '#000', 
          showPanelW: 500, 
          showPanelH: 500, 
          marginL: 5, 
          marginT: 0 
      };

      paras = $.extend({}, defaultParas, paras);

      $(this).each(function() {
          var self = $(this).css({position: 'relative'});
          
          self.find('img').css({
              width: '100%',
              height: '100%'
          });

      });
  }
})(jQuery);
