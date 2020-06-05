// Created by: Vince Chang
$(function () {
  // When the user enters a key, this text is updated to their entered text
  $('#name').keyup(function () {
    $('#greet').text('Hello ' + $('#name').val());
  })
})