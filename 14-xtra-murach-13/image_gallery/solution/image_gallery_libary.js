var $ = function (id) { return document.getElementById(id); }

// ImageGallery is a constructor function that attaches
// functionality to a set of elements on the page.
var ImageGallery = function ( listId, imageId, captionId ) {
    // listId - contains the ID for an element that contains
    // a group of <a> tags that reference images
    var list = $(listId);

    // imageId - contains the ID for the element that will
    // display an image
    var image = $(imageId);

    // captionId - contains the ID for an element that will
    // display the image title
    var caption = $(captionId);

    // Clicking an <a> tag within listId should update the
    // imageId and captionId
    // - imageId.src <= a:href
    // - captionId.innerHTML <= a:title

    function handleAnchorClick(e) {
        e.preventDefault();

        var anchor = e.target;
        image.src = anchor.href;
        caption.innerHTML = a.title;
    }

    var anchors = document.getElementsByTagName("a");
    for (var index = 0; index < anchors.length; ++index) {
        var anchor = anchors[index];
        anchor.onclick = handleAnchorClick;
    }
}
