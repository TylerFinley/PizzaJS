describe('Contact', function() {
  it("creates a new contact with the given specs", function(){
    var testContact = new Contact("meowster","barkstan");
    expect(testContact.firstName).to.equal("meowster");
    expect(testContact.firstName).to.equal("barkstan");
    expect(testContact.addresses).to.eql([]);
  });
});
