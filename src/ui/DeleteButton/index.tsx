import React from "react";

import photo from "../../assets/deleteButton.svg";
interface DeleteButtonProps {
  id: number;
  deleteFunction: (id: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteFunction }) => {
  return (
    <button className="delete-button" onClick={() => deleteFunction(id)}>
      <img src={photo} alt={"delete"} />
    </button>
  );
};

export default DeleteButton;
