import contact from "./contact";
import menuContent from "./menuContent";

const showContent = () => {
  let contentDiv = document.createElement("div");
  let tabContent = menuContent();

  contentDiv.innerHTML = tabContent.outerHTML;

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
      tabContent = menuContent();
    } else if (tab === "contact") {
      tabContent = contact();
    }

    contentDiv.innerHTML = tabContent.outerHTML;
  };

  return contentDiv;
};

export default showContent;
