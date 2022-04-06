import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
function DeleteDialog({ show, deleteItem, toggleShow }) {
  return (
    <SweetAlert
      title="Are You Sure?"
      show={show}
      confirmBtnText="Yes"
      cancelButtonText="No"
      text="Are You Sure?"
      showCancelButton={true}
      onConfirm={deleteItem}
      onCancel={toggleShow}
    />
  );
}

export default DeleteDialog;
