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
      "A RESTful API with endpoints for creating, updating, deleting and listing posts. It also allows you to create and delete comments on posts.",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Docker"],
    imageUrl: postsCommentsApi,
    url: "https://github.com"
  },
  {
    title: "Taking notes",
    description:
        "A web application for creating documents. It uses a Notion-like editor and you can publish documents to the web..",
    tags: ["React", "Next.js", "Convex", "Tailwind"],
    imageUrl: takingnotesImg,
    url: "https://github.com"
  },
  {
    title: "E-Commerce Admin",
    description:
        "The admin project is able to manage categories, sizes, colors and products, as well as control multiple stores and generate separate API routes for each.",
    tags: ["React", "Next.js", "Prisma", "Postgres", "Tailwind"],
    imageUrl: ecommerceadminImg,
    url: "https://github.com"
  },
  {
    title: "PC Build Monitor",
    description:
      "A web scraping script that takes data from a PC assembly website. It uses the Google API to store the price of each PC part in a Google Sheet.",
    tags: ["Python", "Beautiful Soup", "Google API", "Scraping"],
    imageUrl: pcbuildmonitorImg,
    url: "https://github.com"
  },

] as const;
