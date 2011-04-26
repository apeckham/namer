describe("namer", function() {
  describe("lookUpDomains", function() {
    var suggestionElement, jsonResponse;

    beforeEach(function() {
      suggestionElement = $("<div class='suggestion'><span class='name'>domai.nr</span> <div class='domains'></div></div>")
      expect($(suggestionElement).find(".domains").attr("title")).toEqual("");

      jsonResponse = { "query": "domai.nr", "results": [
        { "domain": "domai.nr", "register_url": "http://domai.nr/domai.nr/register", "host": "", "path": "", "subdomain": "domai.nr", "availability": "taken" },
        { "domain": "dom.ai", "register_url": "http://domai.nr/dom.ai/register", "host": "", "path": "/nr", "subdomain": "dom.ai", "availability": "available" },
        { "domain": "do.mainr", "register_url": "http://domai.nr/dom.ai/register", "host": "", "path": "/nr", "subdomain": "dom.ainer", "availability": "available" }
      ]};
    });

    it("should extract the available suggestion names from the DOM", function() {
      spyOn($, "ajax");
      namer.lookup(suggestionElement);
      expect($.ajax.mostRecentCall.args[0].url).toEqual("http://domai.nr/api/json/search?q=domai.nr");
      expect($.ajax.mostRecentCall.args[0].dataType).toEqual("jsonp");
    });

    it("should populate suggestion's domain element with available domains", function() {
      spyOn($, "ajax").andCallFake(function(options) {
        options.success(jsonResponse);
      });

      namer.lookup(suggestionElement);
      expect($(suggestionElement).find(".domains").text()).toEqual("dom.ai, do.mainr");
    });
  });
});