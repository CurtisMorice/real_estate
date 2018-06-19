ngApp.service('SalesService', function($http) {
    console.log('in the SalesService');

    let self = this;

    self.getSales = function() {
        return $http({
            method: 'GET',
            url: '/real_estate',
        }).then((response) => {
            self.allSales = response.data;
        }).catch((error) => {
            console.log(`error getting all Sales`, error);
        })
    };

    // GET because they are FOR SALE just need SQL info
    self.getListing = (() => {
        return $http({
            method: 'GET',
            url: '/real_estate'

        }).then((response) => {
            self.allListings = response.data;

        }).catch((error) => {
            console.log(`error getting all songs:`, error);
        });

    });
    //DELETE if I can get to it. 
});