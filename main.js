
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
                    console.log("user is subscribed");
                    updateSubscriptionOnServer(subscription);
                    
                } else{
                      console.log("push notification not supported");
                      subscribeUser(serviceWorkerRegistration);
                }
         });
    })
}


function subscribeUser(serviceWorkerRegistration){
    const applicationServerPublicKey = 'AAAAxssxb6w:APA91bGjfW-olgrGq6a1PQ8iSRjzx14zUIzO1l9x2RMykBgdDBJ5OqgybrOp8YmdA_imdyrHjxOT8_USHkxY8SXkEV_duvkUfEhJxeofRmiutz57fkagQ--t3bM66W_C9mWKqReN5tkb';
     var options = {
      userVisibleOnly: true
      /*applicationServerKey: applicationServerPublicKey*/
    };
    serviceWorkerRegistration.pushManager.subscribe(options).then(function(subscription){
        updateSubscriptionOnServer(subscription);
    })
}


function updateSubscriptionOnServer(subscription){
    console.log("subscription object on server");
    console.log(subscription);
}

