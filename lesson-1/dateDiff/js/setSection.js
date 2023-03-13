function setSection(sectionId, sectionsClass) {
  const allSections = document.querySelectorAll(`.${sectionsClass}`);
  if (allSections) {
    allSections.forEach((el) => {
      el.style.display = "none";
    });
  }
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
  }
}
export default setSection;
