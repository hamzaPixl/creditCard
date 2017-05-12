/**
 * Created by imha on 12/05/2017.
 */
define([], function () {

  function Render (eventBus, $) {
    this.eventBus = eventBus;
    this.$typeCard = $('#type');
    this.displayNameCard = this.displayNameCard.bind(this);
    this.attachEventListeners();
  }

  Render.prototype = {

    /**
     *
     */
    attachEventListeners: function attachEventListeners () {
      this.eventBus.on('card:detect', this.displayNameCard);
    },

    /**
     *
     * @param event
     * @param data
     */
    displayNameCard: function displayNameCard (event, data) {
      this.$typeCard.html(data);
    },

  };

  return Render;

});