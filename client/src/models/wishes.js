const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Wishes = function () {
    this.url = 'http://localhost:3001/api/wishes';
    this.request = new Request(this.url);
};

Wishes.prototype.bindEvents = function () {
    PubSub.subscribe('FormView:wish-submitted', (evt) => {
        this.postWish(evt.detail); 
    })
}

Wishes.prototype.getData = function(){
    this.request.get()
    .then((wishes =>{
        PubSub.publish('Wishes:data-loaded', wishes);
    }))
}

Wishes.prototype.postWish = function (wish) {
    this.request.post(wish)
     .then((wishes)=> {
         PubSub.publish('Wishes:data-loaded', wishes);
        })
        
}

module.exports = Wishes;
