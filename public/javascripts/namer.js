var namer = {
  lookUpDomains: function() {
    $('#suggestions .name').each(function(i, obj) {
      namer.lookup(name);
    });
  },

  lookup: function(name, resultElement) {
    $.ajax({ success: function(response) {
      var formatted = "";
      $(response.results).each(function() {
        formatted += this.domain;
        formatted += ": ";
        formatted += this.availability;
        formatted += "\r";
      });
      $(resultElement).find(".domains").attr("title", formatted);
    }});
  }
};