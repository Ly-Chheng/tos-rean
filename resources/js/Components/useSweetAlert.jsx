import Swal from 'sweetalert2';

const showConfirmDialog = async ({
  title = "Are you sure?",
  text = "This action cannot be undone!",
  icon = "warning",
  confirmButtonText = "Yes, proceed!",
  cancelButtonText = "បោះបង់",
  confirmButtonColor = "#d33",
  cancelButtonColor = "#3085d6",
  onConfirm,
  onError,
}) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor,
    cancelButtonColor,
    confirmButtonText,
    cancelButtonText,
  });

  if (result.isConfirmed) {
    try {
      await onConfirm();
      Swal.fire({
        title: "ជោគជ័យ!",
        text: "ទិន្នន័យបានលុបចេញដោយជោគជ័យ",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: onError || "An error occurred while performing the action.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  }
};

export default showConfirmDialog;