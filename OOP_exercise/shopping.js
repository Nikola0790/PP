'use strict';


(function () {


    function Product (name, price, expirationDate) {

        this.productId = Math.floor(90000 * Math.random() + 10000)
        this.name = name
        this.price = price.toFixed(2)
        this.expirationDate = new Date(expirationDate) 
        this.getInfo = function () {
            return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase() + this.productId + ', ' + this.name + ', ' + this.price;
        }

    }

    function ShoppingBag () {

        this.listOfProduct = []
        this.addProduct = function (product) {
            if (!product || !(product instanceof Product)){
                throw new Error ('Invalid product input');
            }
            if (product.expirationDate > new Date()) {
                this.listOfProduct.push(product);
            }    
        }
        this.averagePriceProduct = function () {
            var sum = 0;
            var averPrice;
            this.listOfProduct.forEach(function (productPrice) {
                sum += parseFloat(productPrice.price);
            })
            averPrice = sum / this.listOfProduct.length;
            return averPrice.toFixed(3);
        }
        this.getMostExpensive = function () {

            var arr = this.listOfProduct.map(function (el) {
                return el.price;
            });

            var max = parseFloat(arr[0]);
            for (var i = 0; i < arr.length; i++) {
                if (max < parseFloat(arr[i])) {
                    max = parseFloat(arr[i]);
                }
            }
            max.toFixed(2);

            for (var j = 0; j < this.listOfProduct.length; j++) {
                if (parseFloat(max) === parseFloat(this.listOfProduct[j].price)) {
                    return 'The most expensive product: ' + this.listOfProduct[j].name + ' - price: ' +  this.listOfProduct[j].price;
                }
            }
        }
        this.calculateTotalPrice = function () {
            var total = 0;
            var calc = this.listOfProduct.forEach(function (productPrice) {
                total += parseFloat(productPrice.price);
            })
            return calc = total;
        }
        this.getInfo = function () {
            var bag = '';
            this.listOfProduct.forEach(function (prod) {
                bag += '\t\t- ' + prod.getInfo() + '\n';
            })
            return '\tList of products: \n' + bag + '\tAverage price of products: ' + this.averagePriceProduct() + '\n' + '\t' + this.getMostExpensive() + '\n\tTOTAL: ' + this.calculateTotalPrice();
        }
    }

    function PaymentCard (accountBalance, activeOrInactiveStatus, validUntilDate) {

        this.accountBalance = accountBalance
        this.status = activeOrInactiveStatus.toUpperCase();
        this.validUntilDate = new Date(validUntilDate) 
    }

    function checkoutAndBuy (shoppingBag, paymentCard) {

        if (paymentCard.validUntilDate > new Date() && paymentCard.status === 'ACTIVE') {
        
            if (paymentCard.accountBalance >= shoppingBag.calculateTotalPrice()) {
                return 'Purchase is SUCCESSFUL \n' + shoppingBag.getInfo();
            } else {
                return 'You don\'t have enough money in an account'
            }
        } else {
            return 'Payment card has expiried or status is inactive!'
        }
    }




    // ***********************************************************************************
    var prod_1 = new Product ('Chocolate', 125.55, '07 10 2021');
    var prod_2 = new Product ('Milk', 110, '08 27 2021');
    var prod_3 = new Product ('Sugar', 63.795, '07 10 2021');
    var prod_4 = new Product ('Flour', 71, '09 10 2022');
    var prod_5 = new Product ('Juice', 161.795, '11 10 2021');
    var prod_6 = new Product ('Beer', 99.99, '09 10 2021');
    var prod_7 = new Product ('Cheese', 350, '09 10 2021');


    var shopBag = new ShoppingBag ();

    shopBag.addProduct(prod_1);
    shopBag.addProduct(prod_2);
    shopBag.addProduct(prod_3);
    shopBag.addProduct(prod_4);
    shopBag.addProduct(prod_5);
    shopBag.addProduct(prod_6);
    shopBag.addProduct(prod_7);


    var card = new PaymentCard (4000, 'Active', '05 30 2023')


    var purchase = checkoutAndBuy (shopBag, card);

    console.log(purchase);



})();