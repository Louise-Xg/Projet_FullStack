interface DeleteButtonProps {
  id: number;
  updateCatalog: (id: number) => void; //as updateCatalog is actually the function MostRecentCatalog, the type of updateCatalog is defined as: the parameter type of function MostRecentCatalog which is (id: number) and then the type of setEarthquakes(earthquakes.filter((earthquake) => earthquake.id !== id)) which corresponds to void
}

function DeleteButton({ id, updateCatalog }: DeleteButtonProps) {
  //Create a function to delete a target id earthquake
  function deleteEarthquake() {
    // First warning message
    const confirmed = window.confirm(
      "Are you sure you want to delete this earthquake?",
    );

    if (!confirmed) {
      return; //means if user choose no, stop and do nothing
    } else {
      // Second warning message
      const confirmed2 = window.confirm(
        "How dare you?! \n Do you REALLY want to delete this earthquake?! \n YOU EVIL PERSON!",
      );
      if (!confirmed2) {
        return; //means if user choose no, stop and do nothing
      } else {
        // Both confirmations accepted: proceed with deletion
        ///??????
      }
    }
  }

  return (
    <button type="button" onClick={deleteEarthquake}>
      Delete
    </button>
  );
}

export default DeleteButton;
