import { createIcons, ScanFace, MSquare, Mail } from "lucide";
import * as iconLogo from "simple-icons";

createIcons({
  icons: {
    ScanFace,
    MSquare,
    Mail,
  },
});

const facebook = iconLogo.siFacebook.svg;

const container = document.getElementById("fb-icon");
container.innerHTML = facebook;

console.log(facebook);
