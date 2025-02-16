"use client";

import { books } from "@/dummy/books";
import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import { use } from "react";

const page = ({ params }) => {
  const { id } = use(params);
  const book = books.find((v) => v.id == id);
  return (
    <>
      <Stack
        style={{ border: "1px solid #efefef", padding: "50px" }}
        spacing={5}
      >
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>도서명</Typography>
          <TextField variant="outlined" value={book.book_name} />
        </Box>
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>저자명</Typography>
          <TextField variant="outlined" value={book.author} />
        </Box>
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>출판사</Typography>
          <TextField variant="outlined" value={book.publisher} />
        </Box>
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>총 권수</Typography>
          <TextField variant="outlined" value={book.total_amount} />
        </Box>
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>대출 권수</Typography>
          <TextField variant="outlined" value={book.total_rented} />
        </Box>
      </Stack>
      <Button variant="contained">수정하기</Button>
    </>
  );
};

export default page;
