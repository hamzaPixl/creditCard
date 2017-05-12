define(function () {

  function MasterCard () {
    this.name = 'Master Card';
    this.isMyType = this.isMyType.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  MasterCard.prototype = {

    /**
     * Check if it is this type of card
     * @param data
     * @return {boolean}
     */
    isMyType: function isMyType (data) {
      return data.startsWith('5');
    },

    /**
     * Check if number card is valid
     * @param data
     * @return {boolean}
     */
    isValid: function isValid (data) {
      return data.length === 16;
    }

  };

  return new MasterCard();

});