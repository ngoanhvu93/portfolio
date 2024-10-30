import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import takingnotesImg from "@/public/taking-notes.png";
import pcbuildmonitorImg from "@/public/pc-build-monitor.png";
import ecommerceadminImg from "@/public/e-commerce-admin.png";
import postsCommentsApi from "@/public/post-comments-api.png";

export const links = [
  {
    name: "Trang chủ",
    hash: "#home",
  },
  {
    name: "Về tôi",
    hash: "#about",
  },
  {
    name: "Dự án",
    hash: "#projects",
  },
  {
    name: "Kỹ năng",
    hash: "#skills",
  },
  {
    name: "Kinh nghiệm",
    hash: "#experience",
  },
  {
    name: "Liên hệ",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lập trình viên",
    location: "Fast Boy Marketing, TP.Hồ Chí Minh",
    description:
      "Lập trình viên tại Fast Boy Marketing, làm việc với React. Ở đó, tôi làm việc để giải quyết các lỗi do khách hàng báo cáo và phát triển các tính năng mới trong hệ thống.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Hiện tại",
  },
  {
    title: "Cử nhân Khoa học Máy tính",
    location: "Học viện Bưu chính viễn thông",
    description:
      "Vừa tốt nghiệp chuyên ngành Khoa học Máy tính.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Khóa học CNTT",
    location: "Trường THPT Bùi Thị Xuân, TP.Phan Thiết",
    description:
      "Tôi đã theo học một khóa về CNTT khi còn học trung học.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2010",
  },
] as const;

export const projectsData = [
  {
    title: "Posts & Comments API",
    description:
      "API RESTful với các endpoint để tạo, cập nhật, xóa và liệt kê bài viết. Nó cũng cho phép tạo và xóa bình luận trên các bài viết.",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Docker"],
    imageUrl: postsCommentsApi,
    url: "https://github.com"
  },
  {
    title: "Taking notes",
    description:
      "Ứng dụng web để tạo tài liệu. Sử dụng trình soạn thảo giống Notion và bạn có thể xuất bản tài liệu lên web.",
    tags: ["React", "Next.js", "Convex", "Tailwind"],
    imageUrl: takingnotesImg,
    url: "https://github.com"
  },
  {
    title: "E-Commerce Admin",
    description:
      "Dự án quản trị có khả năng quản lý danh mục, kích thước, màu sắc và sản phẩm, đồng thời kiểm soát nhiều cửa hàng và tạo các route API riêng biệt cho từng cửa hàng.",
    tags: ["React", "Next.js", "Prisma", "Postgres", "Tailwind"],
    imageUrl: ecommerceadminImg,
    url: "https://github.com"
  },
  {
    title: "PC Build Monitor",
    description:
      "Script thu thập dữ liệu từ một trang web lắp ráp PC. Sử dụng Google API để lưu trữ giá của từng linh kiện PC trong Google Sheet.",
    tags: ["Python", "Beautiful Soup", "Google API", "Scraping"],
    imageUrl: pcbuildmonitorImg,
    url: "https://github.com"
  }
] as const;
