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

    this.container.innerHTML = ""


for( let entry of wishes){
        const item = document.createElement('h2')
        item.textContent = entry.wish
        const deleteButton = this.createDeleteButton(entry._id)
        this.container.appendChild(item)
        this.container.appendChild(deleteButton)

    }
}


ListView.prototype.createDeleteButton = function (wishId) {
    const del = document.createElement('a')
    del.classList.add('delete-btn')
    del.textContent = 'delete this wish, aww'
    // del.setAttribute('href', '')
    del.addEventListener('click', (evt) => {
        PubSub.publish('ListView:wish-delete-clicked', wishId)
    })

    return del;

}


module.exports = ListView;