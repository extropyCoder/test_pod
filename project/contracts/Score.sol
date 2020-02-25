pragma solidity >=0.4.21 <0.7.0;

contract Score {
    
    uint public score;
    
    address owner;
    
    event Score_set(uint);
    
    constructor() public {
        score = 5;
        owner = msg.sender;
        emit Score_set(99);
    }
    
    receive() external payable {
        // This function is executed on plain Ether transfers 
        // (e.g. via .send() or .transfer())
    }
    
    fallback() external {
        //  This function is executed on a call to the contract:
        //      - if none of the other functions match the given function signature
        //      - if no data was supplied at all
        //      - if there is no receive Ether function declared
        revert();
    }
    
    modifier onlyOwner {
        require(msg.sender == owner, "not allowed");
        _;
    }
    
    function setScore(uint new_score) public onlyOwner {
        score = new_score;
        emit Score_set(new_score);
    }
    
    function getScore() public view returns (uint) {
        return score;
    }
    
    
}