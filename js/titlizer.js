window.onload = function () {
  var container = document.querySelector('.main.ui.container');
  var MenuContainer = container.querySelector('.ui.sticky');
  // Construction of ResumeMenu
  var ResumeMenu = document.createElement('div');
  // Reset Menu :
  MenuContainer.innerHTML = '';
  var H = document.createElement('h4');
  H.setAttribute('ui','header');
  H.innerHTML = document.querySelector('h1').innerHTML;
  MenuContainer.appendChild(H)
  // Get all titles
  var titles = container.querySelectorAll('h2, h3');
  for(var i=0; i < titles.length; i++) {
    // Generate new div.item
    var Div = document.createElement('div');
    var DivMenu = document.createElement('div');
    var ATitle = document.createElement('a');
    var AMenuItem = document.createElement('a');
    var B = document.createElement('b');
    var I = document.createElement('i');
    // Set classes
    Div.setAttribute('class','item');
    DivMenu.setAttribute('class','content menu');
    ATitle.setAttribute('class','title');
    AMenuItem.setAttribute('class','item')
    I.setAttribute('class','dropdown icon');
    // Creating ResumeMenu and sub menus
    var title = titles[i];
    var titleLvl = parseInt(title.tagName.replace('H', ''));
    if (titleLvl == 2) {
      B.innerHTML = title.innerHTML;
      ResumeMenu.setAttribute('class','ui vertical following fluid accordion text menu');
      MenuContainer.appendChild(ResumeMenu);
      ResumeMenu.appendChild(Div)
      Div.appendChild(ATitle);
      var newTitle = 0;
      // console.log(title.innerHTML);
      if (i != titles.length -1) {
        var n = i + 1;
        var NextTitle = titles[n];
        var NextTitleNumber = Number(parseInt(NextTitle.tagName.replace('H', '')));
        while(NextTitleNumber >= 3) {
          ATitle.appendChild(I);
          ATitle.appendChild(B);
          // Disactivate if achordeon menu's working
          // >>>>>>>>
          var titleLink = "#" + title.innerHTML.replace(' ','-').toLowerCase();
          ATitle.setAttribute('href',titleLink);
          title.setAttribute('id',titleLink.substring(1));
          // <<<<<<<<<
          if (n - 1 == i) {
            var newTitle = 1;
            var ItemLink = "#" + NextTitle.innerHTML.replace(' ','-').toLowerCase();
            AMenuItem.setAttribute('href',ItemLink);
            ATitle.appendChild(DivMenu);
            DivMenu.appendChild(AMenuItem);
            NextTitle.setAttribute('id',ItemLink.substring(1));
            AMenuItem.innerHTML = NextTitle.innerHTML;
          } else {
            var ItemLink = "#" + NextTitle.innerHTML.replace(' ','-').toLowerCase();
            AMenuItem.setAttribute('href',ItemLink);
            DivMenu.appendChild(AMenuItem);
            NextTitle.setAttribute('id',ItemLink.substring(1));
            AMenuItem.innerHTML = NextTitle.innerHTML;
          }
          if (i != titles.length - 1) {
            n++;
            var NextTitle = titles[n];
            var NextTitleNumber = Number(parseInt(NextTitle.tagName.replace('H', '')));
          }
        }
        if (newTitle == 0) {

          ATitle.appendChild(B);
          var titleLink = "#" + title.innerHTML.replace(' ','-').toLowerCase();
          ATitle.setAttribute('href',titleLink);
          title.setAttribute('id',titleLink.substring(1));
        }
      }
      else {
          ATitle.appendChild(B);
          var titleLink = "#" + title.innerHTML.replace(' ','-').toLowerCase();
          ATitle.setAttribute('href',titleLink);
          title.setAttribute('id',titleLink.substring(1));
      }
    }
  }

}
