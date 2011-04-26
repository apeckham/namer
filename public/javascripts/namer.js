var namer = {
  lookUpDomains: function() {
    $('.suggestion').each(function() {
      namer.lookup(this);
    });
  },

  lookup: function(suggestionElement) {
    var name = $(suggestionElement).find(".name");
    console.log("lookup");
    $.ajax({
      url: "http://domai.nr/api/json/search?q=" + name.text(),
      dataType: "jsonp",
      success: function(response) {
        var formatted = [];
        $(response.results).each(function() {
          if (this.availability == "available") {
            formatted.push(this.domain);
          }
        });

        if (formatted.length == 0) {
          $(suggestionElement).find(".domains").text("no domains available");
        } else {
          $(suggestionElement).find(".domains").text(formatted.join(", "));
        }
      }});
  }
};