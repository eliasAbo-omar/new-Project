import { createIcons, List, Camera, User, ScanFace } from "lucide";

// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      Camera,
      User,
      List,
      ScanFace,
    },
  });
});
