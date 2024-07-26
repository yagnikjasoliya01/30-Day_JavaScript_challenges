//Activity - 05  Private  fields

//Task - 09
// Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance
// can only be updated through these methods.

//Task - 10
// Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation
class Account{
    #Balance;

    constructor(initialBalance = 0){
        if(initialBalance < 0){
            throw new Error("Initial balance cannot be negative");
        }
        this.#Balance = initialBalance;
    }

    deposit(amount){
        if(amount < 0){
            throw new Error("Deposit amount cannot be negative");
        }
        this.#Balance += amount;
    }

    withdraw(amount){
        if(amount < 0){
            throw new Error("Deposit amount cannot be negative");
        }
        else if(amount > this.#Balance){
            throw new Error("Insufficient balance");
        }
        this.#Balance -= amount;
    }

    getBalance(){
        return this.#Balance;
    }
}

const myaccount = new Account(100);
console.log(myaccount.getBalance());

myaccount.deposit(150)
console.log(myaccount.getBalance());

myaccount.withdraw(150)
console.log(myaccount.getBalance());

try {
    myaccount.withdraw(150);
} catch (error) {
    console.error(error.message)
}


//Task - 10
