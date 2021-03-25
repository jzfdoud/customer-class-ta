class Customer {
    constructor(id, name, stateCode, sales){
        this.id=id;
        this.name =name;
        this.stateCode=stateCode;
        this.sales = sales;
    }

    addSales(sale){
        this.sales += sale;
    }

    print(){
        return `${this.id} | ${this.name} | ${this.stateCode} | ${this.sales}`;
    }
}

let cust1 = new Customer(1,"Jada","OH",0.0);

cust1.addSales(100.00);
cust1.addSales(300.00);
cust1.addSales(900.00);
console.log(cust1.print());