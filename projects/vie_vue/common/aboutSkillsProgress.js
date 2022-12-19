const aboutSkillsProgress = () => {
  let skillInAbout = document.querySelector(".about-cr .skills-box");
  if (skillInAbout) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach((item) => {
        let myVal = item.getAttribute("data-value");
        if (
          window.pageYOffset >
          document.querySelector(".about-cr").offsetTop - 200
        ) {
          item.style.width = myVal;
        }
      });
    });
  }
};

export default aboutSkillsProgress;
