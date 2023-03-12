import { imageLoader } from "./imageLoader";

const gallery = document.getElementById("gallery");
gallery.innerHTML = imageLoader();
