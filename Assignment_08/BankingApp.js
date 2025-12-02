class BankAccount {
    #balance = 0;   // Private field

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.#balance += amount;
        return `Deposited ₹${amount}. New Balance: ₹${this.#balance}`;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }
        this.#balance -= amount;
        return `Withdrawn ₹${amount}. Remaining Balance: ₹${this.#balance}`;
    }

    getBalance() {
        return this.#balance;
    }
}

try {
    const acc = new BankAccount(5000);

    console.log(acc.deposit(2000));   // valid deposit
    console.log(acc.deposit(1000));   // valid deposit

    console.log("Current Balance: ₹" + acc.getBalance());

    // VALID withdrawal
    console.log(acc.withdraw(3000));

    // INVALID withdrawal
    console.log(acc.withdraw(8000));  // should throw an error

} catch (error) {
    console.error("Error:", error.message);
}
