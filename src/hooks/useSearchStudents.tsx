import { useState } from "react";
import { StudentData } from "./useFetchStudents";

const useSearchStudents = (students: StudentData[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { searchTerm, handleSearch, filteredStudents };
};

export default useSearchStudents;
