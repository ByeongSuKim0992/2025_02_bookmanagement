"use client";
import membersRows from "@/dummy/member";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { use, useState } from "react";

const page = ({ params }) => {
  const { id } = use(params);
  const member = membersRows.find((v) => v.id == id);
  const [rank, setRank] = useState(member.ranks || "브론즈");
  const handleChange = (event) => {
    setRank(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "bookName",
      headerName: "책 제목",
      width: 150,
    },
    {
      field: "rentDate",
      headerName: "대출 날짜",
      width: 150,
    },
    {
      field: "returnDate",
      headerName: "반납 날짜",
      width: 150,
    },
  ];

  return (
    <>
      <Stack
        style={{ border: "1px solid #efefef", padding: "50px" }}
        spacing={5}
      >
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>성함</Typography>
          <TextField variant="outlined" value={member.name} />
        </Box>
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Chip style={{ fontSize: "30px" }}>등급</Chip>
          <FormControl style={{ width: "300px" }}>
            <InputLabel>등급</InputLabel>
            <Select onChange={handleChange} value={rank} label="Ranks">
              <MenuItem value={"브론즈"}>브론즈</MenuItem>
              <MenuItem value={"실버"}>실버</MenuItem>
              <MenuItem value={"골드"}>골드</MenuItem>
              <MenuItem value={"플래티넘"}>플래티넘</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography style={{ fontSize: "30px" }}>대출 리스트</Typography>
          <DataGrid
            columns={columns}
            rows={member.rented_books.map((v, i) => {
              const newDate = new Date(v.rentDate);
              const rankDate = {
                브론즈: 7,
                실버: 8,
                골드: 9,
                플래티넘: 10,
              };
              newDate.setDate(
                newDate.getDate() + rankDate[member.ranks || "브론즈"]
              );
              const [returnDate] = newDate.toISOString().split("T");
              return {
                id: i,
                bookName: v.title,
                rentDate: v.rentDate,
                returnDate,
              };
            })}
          />
        </Box>
      </Stack>
      <Button variant="contained">수정하기</Button>
    </>
  );
};

export default page;
