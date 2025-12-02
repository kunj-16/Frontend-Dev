// Parent Class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver Class inherits User
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip Class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required to calculate fare.");
        }
        if (this.distance < 0) {
            throw new Error("Distance cannot be negative.");
        }

        const ratePerKm = 12; // Example rate
        return this.distance * ratePerKm;
    }
}

// Scenario
try {
    const user = new User("Kunj", 4.8);
    const driver = new Driver("Arjun", 4.9, "Honda City");

    const trip = new Trip("Mathura", "Agra", 55);

    const fare = trip.calculateFare();
    console.log(`Trip Fare: ₹${fare}`);

} catch (error) {
    console.error("Error:", error.message);
}


