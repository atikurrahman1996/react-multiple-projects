const AddToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;

  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  localStorage.setItem(id, value);

  //If we want to clear after click

  idInput.value = "";
  valueInput.value = "";
};

// to see the result -> open html file > inspect > applications > click local storage & session storage
