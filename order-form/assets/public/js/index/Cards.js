/**
 * Created by imha on 12/05/2017.
 */
define(['./card/AmericanExpress', './card/MasterCard', './card/Visa'], function (americanExpress, masterCard, visa) {

  function Cards (eventBus) {
    this.eventBus = eventBus;
    this.cards = [americanExpress, masterCard, visa];
  }

  Cards.prototype = {

    /**
     * Return name of card type
     * @param data
     */
    typeCard: function typeCard (data) {
      let type = '?';
      if (!this.parameterIsValid(data)) {
        return type = '';
      }
      this.cards.forEach((card) => {
        if (card.isMyType(data)) {
          type = card.name;
        }
      });
      return type;
    },

    /**
     * Check if the parmetre of the form is valid
     * @param data
     * @return {boolean}
     */
    parameterIsValid: function parameterIsValid (data) {
      if (!data || data === '') {
        return false;
      }
      if (typeof data !== 'string') {
        return false;
      }
      return true;
    },

  };

  return Cards;

});