const footerHTML = '\
<nav>\
  <ul>\
    <li><a href="/cv/">Curriculum Vitae</a></li>\
    <li><a href="https://twitter.com/shayanzadeh">Twitter</a></li>\
    <li><a href="https://instagram.com/shayan93">Instagram</a></li>\
    <li><a href="https://www.linkedin.com/in/shayanzadeh/">LinkedIn</a></li>\
    <li><a href="https://github.com/shayanzadeh/">GitHub</a></li>\
    <li><a href="https://itunes.apple.com/profile/shayanzadeh">Apple Music</a></li>\
    <li><a href="https://www.last.fm/user/Shayanzadeh">Last.fm</a></li>\
  </ul>\
</nav>\
'

function populateFooter() {
  document.getElementsByTagName("footer")[0].insertAdjacentHTML('afterbegin', footerHTML)
}