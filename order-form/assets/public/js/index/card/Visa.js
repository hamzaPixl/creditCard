define(function () {

  function Visa () {
    this.name = 'Visa';
    this.isMyType = this.isMyType.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  Visa.prototype = {
    /**
     * Check if it is this type of card
     * @param data
     * @return {boolean}
     */
    isMyType: function isMyType (data) {
      return data.startsWith('4');
    },

    /**
     * Check if number card is valid
     * @param data
     * @return {boolean}
     */
    isValid: function isValid (data) {
      return data.length > 13 && data.length < 16;
    }
  };

  return new Visa();

});