const showContent = () => {
  let navItems = document.querySelectorAll("#nav li");
  let sections = document.querySelectorAll(".section");

  let tab;

  navItems.forEach(nav => {
    nav.addEventListener("click", () => {
      tab = nav.id;
      setContent(tab);
    });
  });

  const setContent = tab => {
    sections.forEach(section => {
      if (section.classList.contains(tab)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  };
};

export default showContent;
