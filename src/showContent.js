const showContent = () => {
  let contentDiv = document.getElementById("pageContent");
  let tabContent = "Restaurant menu";

  contentDiv.innerHTML = tabContent;

  let navItems = document.querySelectorAll("#nav li");
  let tab;

  navItems.forEach(nav => {
    nav.addEventListener("click", () => {
      tab = nav.id;
      setContent(tab);
    });
  });

  const setContent = tab => {
    if (tab === "menu") {
      tabContent = "Restaurant menu";
    } else if (tab === "contact") {
      tabContent = "Contact here";
    }

    contentDiv.innerHTML = tabContent;
  };
};

export default showContent;
