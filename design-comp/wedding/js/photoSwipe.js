import PhotoSwipeLightbox from "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.4/photoswipe-lightbox.esm.min.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#photoGallery",
  children: "a",
  pswpModule: () =>
    import(
      "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.4/photoswipe.esm.min.js"
    ),
    pinchToClose: false,
    padding: { top: 50, bottom: 50, left: 50, right: 50 }
});

lightbox.init();
