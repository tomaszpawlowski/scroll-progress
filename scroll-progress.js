window.addEventListener('DOMContentLoaded', (DOMContentLoadedEvent) => {
    updateScroll();
    onscroll = () => {updateScroll()};
});

function updateScroll(){
    let currentScrollPosition = document.documentElement.scrollTop,
        documentHeight = document.documentElement.scrollHeight,
        webBrowserWindowHeight = document.documentElement.clientHeight,
        scrollProgressText = document.querySelector('.scroll-progress .scrollProgressValue'),
        scrollProgressBar = document.querySelector('.scroll-progress .scrollProgressBar');
    
    var scrollProgressPercentage = (Math.round((currentScrollPosition / (documentHeight - webBrowserWindowHeight)) * 100) + "%");
    (scrollProgressText) ? scrollProgressText.textContent = scrollProgressPercentage : false;
    (scrollProgressBar) ? scrollProgressBar.style.width = scrollProgressPercentage : false;
};
