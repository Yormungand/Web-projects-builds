const loadingPace = () => {
  Pace.on("start", function () {
    document.querySelector("#preloader").classList.remove("isdone");
    document.querySelector(".loading").classList.remove("isdone");
  });
  Pace.on("done", function () {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });

  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  }

  document.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });
};

export default loadingPace;
