define(function () {

  function MasterCard () {
    this.name = 'Master Card';
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

  };

  return new MasterCard();

});