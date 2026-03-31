import { createIcons, Camera, User } from "lucide";

// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      Camera,
      User,
    },
  });
});
