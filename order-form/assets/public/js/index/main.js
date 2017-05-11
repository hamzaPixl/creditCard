/**
 * Created by imha on 11/05/2017.
 */
require(['./service/eventBus'], function (eventBus) {

  $( "#card" ).change(function(event) {
    console.log($(event.target).val());
  });

});

