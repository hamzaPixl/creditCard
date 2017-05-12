/**
 * Created by imha on 11/05/2017.
 */
require(['./index/service/eventBus', './index/Cards', './index/Render'], function (eventBus, cards, Render) {

  const render = new Render(eventBus, $);

  $('#card').keyup(function (event) {
    eventBus.trigger('card:detect', cards.validCard($(event.target).val()));
  });

});

