/*
-create a variable named $button and assign it the value of the
a. querySelector method of the document object with the string
b. '.hot-button' as it's argument
-create a variable named clickCount a and assign it the value of 0
-create a variable named $clickCounter and assign it the value of the
a. querySelector method of document with the string '.click-count as it's argument
.call the addEventListener method of $button with the string 'click' and hotButton as it's arguments

-define a function named hotButton with event as it's argument
  -if the value of clickCounter is less than 4:
  assign the value of hot-button and cold to the className property of $button
  -else if the value of clickCounter is less than 7:
  assign the value of hot-button and cool to the className property of $button
  -else if the value of clickCounter is less than 10:
  assign the value of hot-button and tepid to the className property of $button
  -else if the value of clickCounter is less than 13:
  assign the value of hot-button and warm to the className property of $button
  -else if the value of clickCounter is less than 16:
    assign the value of hot-button and hot to the className property of $button
    -else:
    assign the value of hot-button and nuclear to the className property of $button
    -increment clickCount by 1
    -assign the value of the template literal `Clicks: ${clickCount}
    a. to the textContent property of $clickCounter
    */
var $button = document.querySelector('.hot-button');
var $clickCounter = document.querySelector('.click-count');
var clickCount = 1;

$button.addEventListener('click', hotButton);

function hotButton(event) {
  if (clickCount < 4) {
    $button.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $button.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $button.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $button.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
  $clickCounter.textContent = `Clicks: ${clickCount}`;
  clickCount++;
}
