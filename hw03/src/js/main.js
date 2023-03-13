import { dataLoader } from "./dataLoader";

const gallery = document.getElementById("gallery");
gallery.innerHTML = dataLoader();
