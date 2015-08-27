var showcase_items = document.getElementsByClassName('showcase-item');

for (var i=0; i<showcase_items.length; i++) {
  var item = showcase_items[i];
  item.addEventListener('mouseenter', function(event) {
    event.target.getElementsByClassName('primary')[0].style.display = 'none';
    event.target.getElementsByClassName('alt')[0].style.display = 'block';
  });
  item.addEventListener('mouseleave', function(event) {
    event.target.getElementsByClassName('primary')[0].style.display = 'block';
    event.target.getElementsByClassName('alt')[0].style.display = 'none';
  });
}
