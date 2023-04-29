//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach((item) => {
  const btn = item.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", (e) => {
    questions.forEach((question) => {
      console.log(question);
      if (question !== item) {
        question.classList.remove("show-text");
      }
    });
    item.classList.toggle("show-text");
  });
  //   btn.addEventListener("click", (e) => {
  //     const post =
  //       e.target.parentElement.parentElement.parentElement.parentElement;

  //     post.classList.toggle("show-text");
  //   });
});
