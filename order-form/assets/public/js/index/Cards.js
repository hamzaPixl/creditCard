/**
 * Created by imha on 12/05/2017.
 */
define(['./card/AmericanExpress', './card/MasterCard', './card/Visa'], function (americanExpress, masterCard, visa) {

  function Cards () {
    this.cards = [americanExpress, masterCard, visa];
    this.validCard = this.validCard.bind(this);
    this.parameterIsValid = this.parameterIsValid.bind(this);
    this.lhunValidation = this.lhunValidation.bind(this);
  }

  Cards.prototype = {

    /**
     * Validation of the card number
     * @param data
     * @return {{name: string, validation: string}}
     */
    validCard: function validCard (data) {
      let validation = {name: '?', validation: '', card: false};
      if (!this.parameterIsValid(data)) {
        validation.name = '';
        return validation;
      }
      this.cards.forEach((card) => {
        if (card.isMyType(data)) {
          validation.card = true;
          validation.name = card.name;
          validation.validation = card.isValid(data);
          //with lhun version
          //validation.validation = this.lhunValidation(data);
        }
      });
      return validation;
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

    /**
     * Lhun validation
     * @param data
     * @return {boolean}
     */
    lhunValidation: function lhunValidation (data) {
      var sum = 0, even = false;
      data.split('').reverse().forEach(function (dstr) {
        d = parseInt(dstr);
        sum += ((even = !even) ? d : (d < 5) ? d * 2 : (d - 5) * 2 + 1);
      });
      return (sum % 10 == 0);
    }
  };

  return new Cards();

});