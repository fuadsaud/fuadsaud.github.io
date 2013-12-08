window.FS = new (function() {
  var _this = this;

  var sidebarToggle = document.querySelector('.js-toggle-sidebar');
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');

  sidebarToggle.addEventListener('click', function() {
    _this.toggleReadingMode();
  });

  this.toggleReadingMode = function() {
    sidebar.classList.toggle('fold');
    content.classList.toggle('only');
  };

  this.enableReadingMode = function() {
    sidebar.classList.add('fold');
    content.classList.add('only');
  };
});
