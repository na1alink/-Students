import useFetchStudents from "./useFetchStudents";
import useSearchStudents from "./useSearchStudents";
import useSortStudents from "./useSortStudents";
import useDeleteStudent from "./useDeleteStudent";

const useStudents = () => {
  const { students, isLoaded, setStudents } = useFetchStudents();
  const { searchTerm, handleSearch, filteredStudents } =
    useSearchStudents(students);
  const { sortedStudents, handleSort } = useSortStudents(filteredStudents);
  const { handleDelete } = useDeleteStudent(sortedStudents, setStudents);

  return {
    students: sortedStudents,
    isLoaded,
    searchTerm,
    handleSearch,
    handleSort,
    handleDelete,
  };
};

export default useStudents;
