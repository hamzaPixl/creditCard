/**
 * Created by imha on 11/05/2017.
 */
require(['./index/service/eventBus', './index/cards', './index/render'], function (eventBus, cards, render) {

  $('#card').on('input',function (event) {
    eventBus.trigger('card:detect', cards.validCard($(event.target).val()));
  });

});

