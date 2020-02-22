const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const ScoreContract = artifacts.require("./score.sol");

contract("SimpleStorage", accounts => {
  it("...should store the value 89.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set value of 89
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});

contract("Score", accounts => {
  
  it("...should return the value 5.", async () => {
    const simpleScoreInstance = await ScoreContract.deployed();

    const storedScore = await simpleScoreInstance.getScore.call();

    assert.equal(storedScore, 5, "The value stored is not 5");

  });

  it("...should store the value 13.", async () => {
    const simpleScoreInstance = await ScoreContract.deployed();

    // set value of 13
    await simpleScoreInstance.setScore(13, { from: accounts[0] });

    const getStoredValue = await simpleScoreInstance.getScore.call();

    assert.equal(getStoredValue, 13, "The score has not been set to 13" );

  });


  it("...should store the value 8 * 6", async () => {

    const scoreContractInstance = await ScoreContract.deployed();

    await scoreContractInstance.setScore( 8 * 6, { from: accounts[0] });

    const new_score = await scoreContractInstance.getScore.call();

    assert.equal(48, new_score, "the new score is not 8 * 6");
  });

  it("...should fail because of negative number", async () => {
    const simpleScoreInstance = await ScoreContract.deployed();

    // set value to -78
    await simpleScoreInstance.setScore(-78, { from: accounts[0] });

    const getStoredValue = await simpleScoreInstance.getScore.call();

    assert.notEqual(getStoredValue, -78, "score has been set to a negative number" );
  });


  it("...should fail because we are passing an address", async () => {
    const simpleScoreInstance = await ScoreContract.deployed();

    // set value to -78
    await simpleScoreInstance.setScore("0xc0ffee254729296a45a3885639AC7E10F9d54979", { from: accounts[0] });

    const getStoredValue = await simpleScoreInstance.getScore.call();

    assert.notEqual(getStoredValue, "0xc0ffee254729296a45a3885639AC7E10F9d54979", "score has been set to an address value" );
  });

});
