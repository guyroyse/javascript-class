describe("Calculon", function() {

  var calculon;

  beforeEach(function() {
    calculon = createCalculon();
  });

  it("displays 0 when started", function() {
    expect(calculon.display()).toBe(0);
  });

});
