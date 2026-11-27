import { toast } from "react-toastify";

interface DeleteButtonProps {
  id: number;
  updateCatalog: (id: number) => void; //as updateCatalog is actually the function MostRecentCatalog, the type of updateCatalog is defined as: the parameter type of function MostRecentCatalog which is (id: number) and then the type of setEarthquakes(earthquakes.filter((earthquake) => earthquake.id !== id)) which corresponds to void
}

function DeleteButton({ id, updateCatalog }: DeleteButtonProps) {
  //Create a function to delete a target id earthquake
  const hDeleteEq = async () => {
    if (confirm("Are you sure you want to delete this earthquake?")) {
      if (
        confirm(
          "How dare you?! \n Do you REALLY want to delete this earthquake?! \n YOU EVIL PERSON!",
        )
      ) {
        await fetch(`http://localhost:30000/eq_catalog/${id}`, {
          method: "DELETE",
        });
        updateCatalog(id);
        toast("You... did it !");
      }
    }
  };

  return (
    <button type="button" onClick={hDeleteEq}>
      Delete
    </button>
  );
}

export default DeleteButton;
