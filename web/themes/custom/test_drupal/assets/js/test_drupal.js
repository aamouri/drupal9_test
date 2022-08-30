(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.test_drupal = {
    attach: function (context, settings) {
      var box = Drupal.dialog($('#block-views-block-events-block-1-2'), {
        width: 900,
        title: Drupal.t('Similar events'),
        closeOnEscape: true,
        closeText: "hide",
        resizable: true,
        classes: {
          "ui-dialog": "ui-corner-all",
          "ui-dialog-titlebar": "ui-corner-all"
        },
        buttons: [{
          text: Drupal.t('Close'),
          class: 'button',
          click: function click() {
            box.close();
          }
        }],
      });

      $('#lightbox').click(function(){
        box.showModal();
      });

      const colors = ["#52E1C3", "#30E159", "#DEE128", "#E17B8A"];
      $('button.update-background-color').click(function(event){
        var element = $(this).parent();
        const random = Math.floor(Math.random() * colors.length);
        element.css( "background-color", colors[random] );
      });
      //
    }
  };

} (jQuery, Drupal));
