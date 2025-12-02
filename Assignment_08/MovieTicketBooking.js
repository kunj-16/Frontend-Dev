
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    return `
Movie: ${this.movieName}
Seat: ${this.seatNo}
Price: ₹${this.price}
`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Avengers: Endgame", "A12", 250, 30);
const ticket2 = new OnlineTicket("Inception", "B7", 300, 40);

// Prototype method from parent works on child object
console.log(ticket1.printTicket());
console.log("Total Amount: ₹" + ticket1.getTotalAmount());

console.log(ticket2.printTicket());
console.log("Total Amount: ₹" + ticket2.getTotalAmount());
