const PubSub = require('../helpers/pub_sub.js')

const ListView = function(container){
    this.container = container
}

ListView.prototype.bindEvents = function(){
    PubSub.subscribe('Wishes:data-loaded', (evt)=>{
        // console.log(evt.detail);
        
        this.render(evt.detail)
        
    })
}

ListView.prototype.render = function(wishes){
for( let entry of wishes){
        const item = document.createElement('h2')
        item.textContent = entry.wish
        this.container.appendChild(item)
    }
}

module.exports = ListView;