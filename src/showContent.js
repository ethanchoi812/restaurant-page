const showContent = () => {
  let contentDiv = document.getElementById("pageContent");
  let tabContent = "";

  let navItems = document.querySelectorAll("#nav li");
  let tab = "";

  navItems.forEach(nav => {
    nav.addEventListener("click", () => {
      tab = nav.id;

      if (tab === "menu") {
        tabContent = "This is my menu";
      } else if (tab === "contact") {
        tabContent = "Contact here";
      } else {
        tabContent = "";
      }
      contentDiv.innerHTML = tabContent;
    });
  });
};

export default showContent;
