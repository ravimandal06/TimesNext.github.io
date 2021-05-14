(function removeAdvertisementAndBlockingElements () {
    $('.inRek').remove();
    $('.mgbox').remove();
    
    Array.from(document.getElementsByTagName("img")).forEach(function (e) {
        if (!e.src.includes(window.location.host)) {
            e.remove()
        }
    });    
    
    Array.from(document.getElementsByTagName("div")).forEach(function (e) {
        var currentZIndex = parseInt(document.defaultView.getComputedStyle(e, null).zIndex);
        if (currentZIndex > 999) {
            console.log(parseInt(currentZIndex));
            e.remove()
        }
    });
})();