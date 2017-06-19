angular.module('app', []);

angular
.module('app')
.controller('CalculatorCtrl', CalculatorCtrl);

function CalculatorCtrl () {
    var vm = this;
    vm.owed= 12.34;
    vm.paid= 20;
    vm.click = function () {
        vm.change= vm.paid - vm.owed;
        console.log(vm.change);
        vm.denominations = {
            oneDollar: 1,
            quarter: .25,
            dime: .10,
            nickel: .05,
            penny: .01
        };
         
        vm.dollars = Math.floor(vm.change / vm.denominations.oneDollar);
        console.log(vm.dollars);
        vm.change -= vm.dollars * vm.denominations.oneDollar;

            
        vm.quarters = Math.floor(vm.change / vm.denominations.quarter);
        console.log(vm.quarters);
        vm.change -= vm.quarters * vm.denominations.quarter;
            
        vm.dimes = Math.floor(vm.change / vm.denominations.dime);
        console.log(vm.dimes);
        vm.change -= vm.dimes * vm.denominations.dime;

        vm.nickels = Math.floor(vm.change / vm.denominations.nickel);
        console.log(vm.nickels);
        vm.change -= vm.nickels * vm.denominations.nickel;

        vm.pennies = Math.floor(vm.change / vm.denominations.penny);
        console.log(vm.pennies);
        vm.change -= vm.pennies * vm.denominations.penny;

    }
}

    