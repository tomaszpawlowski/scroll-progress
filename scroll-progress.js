window.addEventListener('DOMContentLoaded', (DOMContentLoadedEvent) => {
    updateScroll();
    onscroll = () => {updateScroll()};
    onresize = () => {updateScroll()};
});

function updateScroll(){
    let currentScrollPosition = document.documentElement.scrollTop,
        entireDocumentHeight = document.documentElement.scrollHeight,
        webBrowserWindowHeight = document.documentElement.clientHeight,
        scrollProgressText = document.querySelector('.scroll-progress .scrollProgressValue'),
        scrollProgressBar = document.querySelector('.scroll-progress .scrollProgressBar');
    
    var scrollProgressPercentage = (Math.round((currentScrollPosition / (entireDocumentHeight - webBrowserWindowHeight)) * 100) + "%");
    (scrollProgressText) ? scrollProgressText.textContent = scrollProgressPercentage : false;
    (scrollProgressBar.classList.contains('vertical')) ?  scrollProgressBar.style.height = scrollProgressPercentage : scrollProgressBar.style.width = scrollProgressPercentage;
};
