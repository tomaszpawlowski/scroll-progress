window.addEventListener('DOMContentLoaded', (DOMContentLoadedEvent) => {
    console.log('DOM fully loaded and parsed in', Math.round(DOMContentLoadedEvent.timeStamp), "ms, with:", DOMContentLoadedEvent.srcElement.all.length, "elements.");
    onscroll = function(event){
        let currentScrollPosition = document.documentElement.scrollTop,
            documentHeigh = document.documentElement.scrollHeight,
            webBrowserWindowHeigh = document.documentElement.clientHeight;
        // console.log(Math.round((currentScrollPosition / (documentHeigh - webBrowserWindowHeigh)) * 100));
    };
});

