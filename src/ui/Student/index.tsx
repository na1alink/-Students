import "./styles.css";

interface StudentProps {
  id: number;
  email: string;
  name: string;
  sex: string;
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
  avatar: string;
}

const Student: React.FC<StudentProps> = (props) => {
  return (
    <div className="student">
      <div className="student__avatar">
        <img
          src={props.avatar}
          className="student__avatar-img"
          alt={props.name}
        />
      </div>
      <div className="student__avatar-name">{props.name}</div>
      <div className="student__avatar-specialty">{props.specialty}</div>
      <div className="student__avatar-group">{props.group}</div>
      <div className="student__avatar-age">{props.sex}</div>
      <div className="student__avatar-rating">{props.rating}</div>
      <div className="student__avatar-color"></div>
      {/* <DeleteButton id={id} deleteFunction={deleteFunction} /> */}
    </div>
  );
};

export default Student;
