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
                    formatted.push(this.domain + ": " + this.availability);
                });
                $(suggestionElement).find(".domains").text(formatted.join(", "));
            }});
    }
};