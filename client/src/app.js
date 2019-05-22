const BucketFormView = require('./views/form_view.js')
const ListView = require('./views/list_view.js')
const Wishes = require('./models/wishes.js')

document.addEventListener('DOMContentLoaded', () => { 
    console.log('Javascript Loaded');
    
    const bucketForm = document.querySelector('form#bucket-form')
    const bucketFormView = new BucketFormView(bucketForm)
    bucketFormView.bindEvents();

    const wishContainer = document.querySelector('div#wish-list') 
    const listView = new ListView(wishContainer)
    listView.bindEvents();

    const wishes = new Wishes()
    wishes.bindEvents();
    wishes.getData();


    
});