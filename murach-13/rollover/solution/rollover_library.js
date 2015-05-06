var $ = function (id) { return document.getElementById(id); }

// Rollover is a constructor function that attaches
// functionality to a set of elements on the page.
var Rollover = function ( imageId, newImageURL ) {
    // imageId - the ID for the image element
    var image = $(imageId);
    var originalImageUrl = image.src;

    // newImageURL - URL of image to display on rollover
    
    // When the mouse rolls over the imageId element, the
    // image should switch to newImageURL.  When the mouse
    // rolls out of the imageId element, the image should
    // switch back.

    image.onmouseover = function (e) {
        image.src = newImageURL;
    };

    image.onmouseout = function (e) {
        image.src = originalImageUrl;
    }
}
