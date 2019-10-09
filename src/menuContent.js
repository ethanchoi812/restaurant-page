const menuContent = () => {
  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuDiv.innerHTML += "<div>Restaurant menu</div>";

  return menuDiv;
};

export default menuContent;
