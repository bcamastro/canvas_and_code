  document.getElementById('readMoreBtn').addEventListener('click', function () {
    const content = document.getElementById('about-content');
    content.classList.toggle('collapsed');
    content.classList.toggle('expanded');
    this.textContent = content.classList.contains('expanded')
      ? 'Show less'
      : 'Learn more about Southern Chic Lash and Evangelina here';
  });