$(window).load(function(){
    var pages = $('#slideshow li'), current=0;
    var currentPage,nextPage;

    $('#slideshow .button').click(function(){
        currentPage= pages.eq(current);
        if($(this).hasClass('prevButton'))
        {

            if (current <= 0)
                current=pages.length-1;
            else
                current=current-1;
        }
        else
        {
            if (current >= pages.length-1)
                current=0;
            else
                current=current+1;
        }
        nextPage = pages.eq(current);	
        currentPage.hide();	
        nextPage.show();		
    });
});


function receiveMessage(e){
    var t,i,n=e.data.split(":"),r=n[0],a=0,o=["https://organizer.ticketpay.de","https://ticketing.ticketpay.de","https://shop.ticketpay.de","https://preregistration.ticketpay.de"];
    if(Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){
        for(var i=t||0,n=this.length;n>i;i++)
            if(this[i]===e)return i;return-1}),-1!==o.indexOf(e.origin)&&"resize"===r)for(t=document.getElementsByTagName("iframe"),i=t.length;i>a;a++)if((t[a].contentWindow||t[a].documentWindow)==e.source)return void(t[a].style.height=n[1]+"px")}window.addEventListener?window.addEventListener("message",receiveMessage,!1):window.attachEvent&&window.attachEvent("onmessage",receiveMessage);




