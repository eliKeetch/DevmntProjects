$(document).ready(function() {

var todoApp = $("#todoApp");

var title = $("<h1>ToDoApp</h1>");
var inputText = $('<input placeholer="add new todo" />')
var btn = $('<button>Add todo </button>');
var list = $('<ol></ol>');
var clear = $('<button>Clear</button>')

todoApp.append(title);
todoApp.append(inputText);
todoApp.append(btn);
todoApp.append(list);
todoApp.append(clear);

btn.on('click', function() {
  var inputVal = inputText.val();
  inputText.val('');
  var newListItem = $('<li></li>').html(inputVal);
  list.append(newListItem);

})
function clearItems() {
$('li').remove();

}
list.on('click','li', function() {
  $(this).toggleClass('done');
})

clear.on('click', clearItems);

})
