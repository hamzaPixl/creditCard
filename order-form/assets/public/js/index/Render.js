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
     * Attach event listeners for event bus
     */
    attachEventListeners: function attachEventListeners () {
      this.eventBus.on('card:detect', this.displayNameCard);
    },

    /**
     * display the name of card
     * @param event
     * @param data
     */
    displayNameCard: function displayNameCard (event, data) {
      if (data.card) {
        const style = data.validation ? `<span class="label label-success">Valid</span>` : `<span class="label label-danger">Not Valid</span>`;
        this.$typeCard.html(`${data.name} ${style}`);
      } else {
        this.$typeCard.html(data.name);
      }
    },

  };

  return Render;

});