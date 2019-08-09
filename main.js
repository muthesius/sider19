function receiveMessage(e){
    var t,i,n=e.data.split(":"),r=n[0],a=0,o=["https://organizer.ticketpay.de","https://ticketing.ticketpay.de","https://shop.ticketpay.de","https://preregistration.ticketpay.de"];
    if(Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){
        for(var i=t||0,n=this.length;n>i;i++)
            if(this[i]===e)return i;return-1}),-1!==o.indexOf(e.origin)&&"resize"===r)for(t=document.getElementsByTagName("iframe"),i=t.length;i>a;a++)if((t[a].contentWindow||t[a].documentWindow)==e.source)return void(t[a].style.height=n[1]+"px")}window.addEventListener?window.addEventListener("message",receiveMessage,!1):window.attachEvent&&window.attachEvent("onmessage",receiveMessage);