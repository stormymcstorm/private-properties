const privateProperties = require('../index');
const {expect} = require('chai');

describe('private properties', function () {
  let _;
  let testContext = {};
  let desc = "test-private"

  beforeEach(function () {
    _ = privateProperties(desc);

    // ensure private properties object is init
    _(testContext);
  });
  afterEach(function () {
    _ = undefined;
    testContext = {};
  });

  it("_(context) should return an object", function () {
    expect(_(testContext)).to.be.an('object');
  });

  it("_(context) should return an object without public properties", function () {
    expect(Object.keys(testContext).length).to.equal(0);
  });

  it('the object returned by _(this) should contain a symbol', function () {
    expect(Object.getOwnPropertySymbols(testContext)[0]
      .toString()).to.equal(`Symbol(${desc})`);
  });

  it("can set and retrieve properties", function () {
    _(testContext).test = 'works';

    expect(_(testContext).test).to.equal('works');
  });
});
