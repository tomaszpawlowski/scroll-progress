window.addEventListener('DOMContentLoaded', (DOMContentLoadedEvent) => {
    console.log('DOM fully loaded and parsed in', Math.round(DOMContentLoadedEvent.timeStamp), "ms, with:", DOMContentLoadedEvent.srcElement.all.length, "elements.");
    onscroll = () => {updateScroll()};
    updateScroll();
});

function updateScroll(){
    let currentScrollPosition = document.documentElement.scrollTop,
        documentHeigh = document.documentElement.scrollHeight,
        webBrowserWindowHeigh = document.documentElement.clientHeight,
        scrollProgressText = document.querySelector('.scrollProgressBox');
    scrollProgressText.textContent = (Math.round((currentScrollPosition / (documentHeigh - webBrowserWindowHeigh)) * 100) + "%");
    // console.log(Math.round((currentScrollPosition / (documentHeigh - webBrowserWindowHeigh)) * 100));
};
