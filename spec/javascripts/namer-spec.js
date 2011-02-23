describe("namer", function() {
  describe("lookUpDomains", function() {
    beforeEach(function() {

      spyOn($, 'ajax');
      spec.loadFixture('show');
    });

    it("should make a request for each suggestion", function() {
//      expect($.ajax.callCount).toEqual(3);
    });
  });
});