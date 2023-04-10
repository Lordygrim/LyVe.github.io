let event ={
    "api key":"J90rpeuCfvaM3C73tizV7lOus6cqVgNr",
    fetchevent: function(event) {
        fetch("https://app.ticketmaster.com/discovery/v2/events?.json?apikey=J90rpeuCfvaM3C73tizV7lOus6cqVgNr")
        .then ((response) => response.json())
        .then((data) => console.log(data));
    }
};
