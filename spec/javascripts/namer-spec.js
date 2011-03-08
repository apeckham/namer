describe("namer", function() {
  describe("lookUpDomains", function() {
    it("should populate suggestion's domain element", function() {
      var suggestionElement = $("<div class='suggestion'><div class='domains'></div></div>")
      expect($(".suggestion .domains").text(), suggestionElement).toEqual("");

      var ajax = { "query": "domai.nr", "results": [
        { "domain": "domai.nr", "register_url": "http://domai.nr/domai.nr/register", "host": "", "path": "", "subdomain": "domai.nr", "availability": "taken" },
        { "domain": "dom.ai", "register_url": "http://domai.nr/dom.ai/register", "host": "", "path": "/nr", "subdomain": "dom.ai", "availability": "available" }
      ]};
      spyOn($, "ajax").andCallFake(function(options) {
        options.success(ajax);
      });
      namer.lookup("domai.nr", suggestionElement);
      expect($(suggestionElement).find(".domains").attr("title")).toEqual("domai.nr: taken\rdom.ai: available\r");
    });
  });
});