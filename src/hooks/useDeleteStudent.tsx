import { StudentData } from "./useFetchStudents";

const useDeleteStudent = (
  students: StudentData[],
  setStudents: React.Dispatch<React.SetStateAction<StudentData[]>>
) => {
  const handleDelete = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return { handleDelete };
};

export default useDeleteStudent;
