const PubSub = require('../helpers/pub_sub.js')

const ListView = function(){

}

ListView.prototype.bindEvents = function(){
    PubSub.subscribe('FormView:wish-submitted', (evt)=>{
        console.log(evt.detail);
        
        // this.render(evt.detail)
        
    })
}

module.exports = ListView;