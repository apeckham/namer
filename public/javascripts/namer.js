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
                console.log(response);
                var formatted = "";
                $(response.results).each(function() {
                    formatted += this.domain;
                    formatted += ": ";
                    formatted += this.availability;
                    formatted += "\r";
                });
                console.log(formatted);
                $(suggestionElement).find(".domains").attr("title", formatted);
            }});
    }
};