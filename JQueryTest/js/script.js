$(function () {
  console.log($("h1"));
  $("h1").on("click", function () {
    $(this).hide();
  });
});
