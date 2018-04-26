pragma solidity ^0.4.23;


contract Conference {
    address public organizer;
    mapping(address=>uint) public registrantsPaid;
    uint8 public quota;
    uint8 public ticket_sold;

    event Deposit (address _from, uint8 amount);
    event Refund(address _to, uint8 amount);


    constructor (){
        organizer = msg.sender;
        quota = 10;
        ticket_sold = 0;
    }
    function buyTicket(address buyer, uint8 quantity) public {
        if (ticket_sold + quantity < quota){
            registrantsPaid[buyer] = quantity;
            ticket_sold += quantity;
            emit Deposit(buyer, quantity);
        }        
        return;
    }

    function getQuota() public constant returns (uint8){
        return quota;
    }

    function getTicketSold() public constant returns (uint8){
        return ticket_sold;
    }

    function changeQuota(uint8 newQuota) public {
        quota = newQuota;
    }

    function refundTicket(address buyer, uint8 quantity) public {
        require(registrantsPaid[buyer] == quantity);
        registrantsPaid[buyer] = 0;
        ticket_sold -= quantity;
        emit Refund(buyer, quantity);
    }

    function destroy() public {
        if (msg.sender != organizer){
            return;
        }
        selfdestruct(organizer);
    }


}
