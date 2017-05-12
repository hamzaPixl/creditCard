define(function () {

  function AmericanExpress () {
    this.name = 'American Express';
    this.isMyType = this.isMyType.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  AmericanExpress.prototype = {

    /**
     * Check if it is this type of card
     * @param data
     * @return {boolean}
     */
    isMyType: function isMyType (data) {
      if (!data.startsWith('3')) {
        return false;
      }
      return data.startsWith('34') || data.startsWith('37');
    },

    /**
     * Check if number card is valid
     * @param data
     * @return {boolean}
     */
    isValid: function isValid (data) {
      return data.length === 15;
    },

  };

  return new AmericanExpress();

});