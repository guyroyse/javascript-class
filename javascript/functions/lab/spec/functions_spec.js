describe("functions", function() {

  describe("useless function", function() {

    it("returns undefined", function() {
      expect(uselessFunction()).not.toBeDefined();
    });

  });

  describe("panda status", function() {

    it("returns values", function() {
      expect(pandaStatus()).toBe('sad');
    });

  });

  describe("cool concatenator", function() {

    it("concatenates two strings", function() {
      expect(coolCat("foo", "bar")).toBe("foobar");
    });

    it("returns the string it is given when given a single argument", function() {
      expect(coolCat("foo")).toBe("foo");
    });

    it("returns empty string if given no arguments", function() {
      expect(coolCat()).toBe("");
    });

    it("concatenates multiple strings", function() {
      expect(coolCat("foo", "bar", "baz", "qux")).toBe("foobarbazqux");
    });

    it("is assignable to a variable", function() {
      expect(coolCatVar("foo", "bar")).toBe("foobar");
    });

    it("is assignable to an object", function() {
      expect(coolCatObject.coolCatProperty("foo", "bar")).toBe("foobar");
    });

    it("is assignable to an array", function() {
      expect(coolCatArray[0]("foo", "bar")).toBe("foobar");
    });

  });

  describe("call counter", function() {

    it("knows how many times it has been called", function() {
      callCounter();
      callCounter();
      callCounter();
      expect(callCounter.calls).toBe(3);
    });

  });

});
