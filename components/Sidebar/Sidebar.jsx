"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  const pages = [
    { pageName: "메인 페이지", link: "/" },
    { pageName: "회원 페이지", link: "/members" },
    { pageName: "도서 페이지", link: "/books" },
    { pageName: "대출 페이지", link: "/rents" },
  ];

  return (
    <aside className="w-40 border-r-slate-50 border-r-2">
      <List>
        {pages.map((v, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton href={v.link}>
              <ListItemText primary={v.pageName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default Sidebar;
