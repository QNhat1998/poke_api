import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Cho phép truy cập từ mạng LAN
    port: 3000, // Đổi cổng nếu cần
    strictPort: true, // Nếu cổng 3000 bận, không tự đổi
    cors: true, // Bật CORS nếu cần
  },
});
