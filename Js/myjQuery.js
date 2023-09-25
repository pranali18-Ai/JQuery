//1. Element Selector
$(document).ready(function () {
  console.log("I am in the new file");

  // Output a message to indicate that jQuery is being used
  console.log("We are using jQuery");

  // Select all <button> elements and attach a click event handler
  // $("button").click(function () {
  //   console.log("Button clicked !", this);
  // });

  // Select all <button> elements and attach a click event handler
  //   $("button").click(function () {
  //     console.log("button clicked!!");
  //     $(this).hide(); // Hide the clicked button
  //     $("#id").hide(); // Hide an element with the ID 'id'
  //     $(".class").hide(); // Hide all elements with the class 'class'
  //   });
  // });

  //  $("button").click(function () {
  //  console.log("button clicked!!", this);
  //  $('button').hide();
  //  $(this).hide();
  //  $('#id').hide();   //Id
  //  $('.class').hide    //class
  //  });

  // TYPES OF SELECTORS
  // 1. Element selector
  // $('button').click();
  // //   // 2.Id selector
  // //   // $("#2").click();

  // //   //3. Class selector
  // //   // $(".odd").click();

  // //   //other selectors
  // //   // $("button.odd").click(); //for specific class button
  // //   $("button:first").click(); //first button
  // //   $("*").click(); //clicks on all the elements

  // TYPES OF EVENTS
  // 1. Mouse Event : Click, dbClick, mousecenter, mouseleave
  // 2. Keyboard Event: Keypress, keydown, MediaKeyStatusMap
  // 3. form Event: Submit, Change, focus, blur
  // 4. document/windows Event: load, resize, scroll, unload

  //dblclick
  // $("button").dblclick(function () {
  //   console.log("Button double clicked !", this);
  // });

  // //mouseenter
  // $("button").mouseenter(function () {
  //   console.log("mouse entered !", this);
  // });

  // $("button").hover(function () {
  //   console.log(" you hovered on:", this);
  // });

  // $("button").click(function () {
  //   console.log("Button clicked !", this);
  // });

  //ON METHOD
  $("button").on({
    click,
    function() {
      console.log("on clicked Button:", this);
    },
  });
});
