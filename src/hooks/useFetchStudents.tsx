import { useEffect, useState } from "react";

export interface StudentData {
  id: number;
  email: string;
  name: string;
  sex: "m" | "f";
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
  avatar: string;
}

const useFetchStudents = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("https://front-assignment-api.2tapp.cc/api/persons")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setStudents(data.students);
          setIsLoaded(true);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error.message);
          setIsLoaded(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { students, setStudents, isLoaded, error };
};

export default useFetchStudents;
