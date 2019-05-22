const PubSub = require('../helpers/pub_sub.js')

const BucketFormView = function(form) {
    this.form = form
}

BucketFormView.prototype.bindEvents = function () {
    this.form.addEventListener('submit', (evt) => {
        this.handleSubmit(evt);
    });
};

BucketFormView.prototype.handleSubmit = function (evt) {
    evt.preventDefault();
    const newWish = this.createWish(evt.target);
    
    PubSub.publish('FormView:wish-submitted', newWish);
    evt.target.reset();
};

BucketFormView.prototype.createWish = function (form) {
    const newWish = {
        wish: form.wish.value,
        }

    return newWish;
    };

   


module.exports = BucketFormView;