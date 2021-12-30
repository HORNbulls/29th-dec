class Account{
    constructor(name, accno, balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    getbalance(){
        return `The balance is: ₹${this.balance}`;

    } 

    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance = this.balance-amount;
            console.log("Reduced balance", this.balance);
            return this.getbalance();
        }   else{
            return `Insufficient balance, ${this.getbalance()}`;
        }
    }
 
    deposit(amount) {
    this.balance = this.balance + amount;
    console.log("the total balance", this.balance);
    return this.getbalance();
    }
}

const prasanna = new Account("Prasanna", 451, 50000);
const siva = new Account("Siva", 845, 45000);
const vijay = new Account("Vijay", 741, 65000);

console.log(prasanna);

console.log(prasanna.getbalance());

console.log(prasanna.withdraw(10000));

console.log(prasanna.deposit(80000));

