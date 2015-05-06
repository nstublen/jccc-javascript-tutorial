var $ = function (id) { return document.getElementById(id); }

// ImageGallery is a constructor function that attaches
// functionality to a set of elements on the page.
var ImageGallery = function ( listId, imageId, captionId ) {
    // listId - contains the ID for an element that contains
    // a group of <a> tags that reference images
    
    // imageId - contains the ID for the element that will
    // display an image
    
    // captionId - contains the ID for an element that will
    // display the image title

    // Clicking an <a> tag within listId should update the
    // imageId and captionId
    // - imageId.src <= a:href
    // - captionId.innerHTML <= a:title
}
