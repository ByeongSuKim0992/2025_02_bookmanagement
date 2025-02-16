"use client";
import membersRows from "@/dummy/member";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const page = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "성함",
      width: 150,
    },
    {
      field: "rented_books",
      headerName: "연체 책 리스트",
      width: 150,
    },
    {
      field: "ranks",
      headerName: "등급",
      width: 110,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) =>
    //     `${row.firstName || ""} ${row.lastName || ""}`,
    // },
  ];

  const router = useRouter();

  return (
    <div>
      <h2>회원 리스트</h2>
      <DataGrid
        rows={membersRows.map((v) => {
          const newBooks = v.rented_books
            .map((v1) => v1.title)
            .reduce((acc, cur) => acc + " " + cur);
          return { ...v, rented_books: newBooks };
        })}
        columns={columns}
        onCellDoubleClick={(params) => {
          router.push(`/members/${params.row.id}`);
          console.log({ params });
        }}
      />
    </div>
  );
};

export default page;
