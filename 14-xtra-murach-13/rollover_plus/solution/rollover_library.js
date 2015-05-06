var $ = function (id) { return document.getElementById(id); }

// Rollover is a constructor function that attaches
// functionality to a set of elements on the page.
var Rollover = function ( imageId1, imageId2 ) {
    // imageId1 - the ID for the first image element
    var image1 = $(imageId1);

    // imageId2 - the ID for the first image element
    var image2 = $(imageId2);

    // When the mouse rolls over the imageId element, the
    // image should switch to newImageURL.  When the mouse
    // rolls out of the imageId element, the image should
    // switch back.

    image1.parentElement.onmouseover = function (e) {
        image1.setAttribute("class", "inactive");
        image2.setAttribute("class", "active");
    };

    image1.parentElement.onmouseout = function (e) {
        image2.setAttribute("class", "inactive");
        image1.setAttribute("class", "active");
    };
}