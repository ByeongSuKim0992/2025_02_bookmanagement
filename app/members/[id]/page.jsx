"use client";
import membersRows from "@/dummy/member";
import { Typography } from "@mui/material";

const page = ({ params }) => {
  const { id } = params;
  const member = membersRows.find((v) => v.id == id);
  return (
    <div>
      <Typography>{member.name}</Typography>
      <Chip label={member.ranks}></Chip>
      <Typography>{member.rented_books}</Typography>
    </div>
  );
};

export default page;
