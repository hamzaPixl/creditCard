define(function () {

  function AmericanExpress () {
    this.name = 'American Express';
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

  };

  return new AmericanExpress();

});