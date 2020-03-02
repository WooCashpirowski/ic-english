import "./index.css";
import "./mobile.css";
import "./config.css";
import "./utilities.css";
import "@fortawesome/fontawesome-free/js/all";

// Section select
const teacherSection = document.querySelector(".select.teacher");
const seasonsSection = document.querySelector(".select.seasons");
const seasonsLearnerSection = document.querySelector(".select.seasons-learner");
const teacherSelection = document.querySelector(".select.teacher-section");
const footer = document.querySelector(".footer");
document.querySelector("#select-teacher").addEventListener("click", function() {
  this.parentNode.classList.add("hidden");
  teacherSection.classList.add("visible");
});
document.querySelector("#select-lessons").addEventListener("click", function() {
  this.parentNode.classList.add("hidden");
  seasonsLearnerSection.classList.add("visible");
  footer.classList.add("hide");
});
document.querySelector("#run-lessons").addEventListener("click", function() {
  this.parentNode.classList.add("hidden");
  this.parentNode.classList.remove("visible");
  seasonsSection.classList.add("visible");
  footer.classList.add("hide");
});
document.querySelector("#learn-more").addEventListener("click", function() {
  this.parentNode.classList.add("hidden");
  this.parentNode.classList.remove("visible");
  teacherSelection.classList.add("visible");
  footer.classList.add("hide");
});

document
  .querySelector(".main-container .select.teacher-section .back-btn")
  .addEventListener("click", function() {
    this.parentNode.classList.remove("visible");
    this.parentNode.classList.add("hidden");
    document.querySelector(".select.teacher").classList.remove("hidden");
    footer.classList.remove("hide");
  });
document
  .querySelector(".main-container .select.teacher .back-btn")
  .addEventListener("click", function() {
    this.parentNode.classList.remove("visible");
    this.parentNode.classList.add("hidden");
    document.querySelector(".select.main").classList.remove("hidden");
  });
document
  .querySelector(".main-container .select.seasons .back-btn")
  .addEventListener("click", function() {
    this.parentNode.classList.remove("visible");
    this.parentNode.classList.add("hidden");
    document.querySelector(".select.teacher").classList.remove("hidden");
    footer.classList.remove("hide");
  });
document
  .querySelector(".main-container .select.seasons-learner .back-btn")
  .addEventListener("click", function() {
    this.parentNode.classList.remove("visible");
    this.parentNode.classList.add("hidden");
    document.querySelector(".select.main").classList.remove("hidden");
    footer.classList.remove("hide");
  });
