import "./styles.css";

export const ListStudentsHeader = () => {
  return (
    <div className="studentsList__header">
      <div className="studentsList__header-name">ФИО</div>
      <div className="studentsList__header-specialty">Специальность</div>
      <div className="studentsList__header-group">Группа</div>
      <div className="studentsList__header-age">Возраст</div>
      <div className="studentsList__header-rating">Рейтинг</div>
    </div>
  );
};
