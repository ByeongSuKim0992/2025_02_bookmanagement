"use client";
import { books } from "@/dummy/books";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const page = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "book_name",
      headerName: "도서명",
      width: 150,
    },
    {
      field: "author",
      headerName: "저자명",
      width: 150,
    },
    {
      field: "publisher",
      headerName: "출판사",
      width: 150,
    },
    {
      field: "total_amount",
      headerName: "총 권수",
      width: 150,
    },
    {
      field: "total_rented",
      headerName: "대출 권수",
      width: 150,
    },
  ];

  const router = useRouter();

  return (
    <div>
      <h2>도서 리스트</h2>
      <DataGrid
        columns={columns}
        onCellDoubleClick={(params) => {
          router.push(`/books/${params.id}`);
        }}
        rows={books}
      />
    </div>
  );
};

export default page;
