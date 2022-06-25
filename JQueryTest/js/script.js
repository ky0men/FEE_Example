$(function () {
  var inputCheckbox = $("input:checkbox");
  console.log(inputCheckbox.attr("id"));
  // inputCheckbox.on("changed", function () {
  //   console.log(inputCheckbox.prop("checked"));
  // });
  //Test checked
  // inputCheckbox.change(function () {
  //   console.log(inputCheckbox.prop("checked"));
  // });
  var inputUserName = $("#user-name-txt");
  inputUserName.keyup(function () {
    console.log(inputUserName.val());
  });
  // inputUserName.focus(function () {
  //   console.log("Focus");
  // });
  inputUserName.on("focus", function () {
    console.log("Focus Trigger");
  });

  inputCheckbox.on("change", function () {
    console.log(inputCheckbox.is(":checked"));
  });

  //Slide show code
  let slideShow = $(".slide-show img");
  let imgLink = [
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80",
  ];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % imgLink.length; //0,1,2,3,4,0,1,2,3,4....
    slideShow.fadeOut(function () {
      $(this).attr("src", imgLink[i]);
      $(this).fadeIn();
    });
  }, 3000);

  //Add and remove data of an element
  slideShow.data("ImageLinkList", imgLink);
  console.log(slideShow.data());
  slideShow.data("name", "Test name");
  console.log(slideShow.data());
  slideShow.removeData();
  console.log(slideShow.data());

  //Delegate event for paragraph
  $(".paragraph").on("click", "p", function () {
    $(this).css("color", "red");
  });

  //Check isChecked checkbox
  $("checkbox").on("change", function () {
    //Solution 1
    let isChecked = $(this).is(":checked");

    //Solution 2
    let ischecked2 = $(this).prop("checked");
  });

  //Get value of selected option
  $("#select-option").on("change", function () {
    let selectedOption = $(this).find(":selected:not(:first-child)").text();
    console.log(selectedOption);
  });

  //AJAX
  $.ajax({
    url: "./js/data.json",
    type: "GET",
  })
    .fail(function (res) {
      console.log("Failed");
    })
    .done(function (res) {
      console.log(res);
    })
    .always(function (res) {
      console.log("Always run!");
    });
});
