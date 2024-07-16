import { useState } from "react";
import { StudentData } from "./useFetchStudents";

const useSearchStudents = (students: StudentData[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const normalizeString = (str: string) =>
    str.replace(/\s+/g, " ").trim().toLowerCase();

  const filteredStudents = students.filter((student) =>
    normalizeString(student.name).includes(normalizeString(searchTerm))
  );

  return { searchTerm, handleSearch, filteredStudents };
};

export default useSearchStudents;
