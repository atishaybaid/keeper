
window.addEventListener('load', function() {   
   console.log("load function called");
    if('serviceWorker' in navigator){
        console.log("serviceWorker supported in navigator");
        navigator.serviceWorker.register('sw.js').then(intializeState);
    }
});



function intializeState(){
    console.log("intializeState called");

    if(!'showNotification' in ServiceWorkerRegistration.prototype){
        console.log("serviceWorker not supported in your browser");
    }
    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration){
        console.log("serviceWorker registered");
         serviceWorkerRegistration.pushManager.getSubscription().then(function(subscription){
             console.log("serviceWorker get subscription callback");
                if(subscription){
                    // to do
                    console.log("user not subscribed");
                    
                } else{
                      console.log("push notification not supported");
                      subscribeUser();
                }
         });
    })
}


function subscribeUser(){
    ServiceWorkerRegistration.prototype.pushManager.subscribe().then(function(reg){
        console.log("push subscribed");
        console.log(reg);
    })
}