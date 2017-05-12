define(function () {

  function Visa () {
    this.name = 'Visa';
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
  };

  return new Visa();

});