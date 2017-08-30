self.addEventListener('install',(event)=>{
    console.log("sw installed");
});


self.addEventListener('activate',(event)=>{
    console.log("service worker is activated");
})


self.addEventListener('push',(event)=>{
    var data =  {};
    if(event.data){
        data = event.data;
    }
    var title = data.title || 'Msg Title';
    var message = data.message || 'Message';
    var tag = 'simple-push-demo-notification-tag';

    //const icon; icon to be added

    event.waitUntil(  
    self.registration.showNotification(title, {  
      body: message,  
      tag: tag  
    })  
  );  

})