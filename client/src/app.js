const BucketFormView = require('./views/form_view.js')


document.addEventListener('DOMContentLoaded', () => { 
    console.log('Javascript Loaded');
    
    const bucketForm = document.querySelector('form#bucket-form')
    const bucketFormView = new BucketFormView(bucketForm)
    bucketFormView.bindEvents();
});