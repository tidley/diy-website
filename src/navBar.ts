const ACLASS = '<a class=';
const HREF = ' href=';
const JSCLICK = " onclick='";

function makeMenu(options: string[][]): string {
  let navMenu = "<div id='menu'>  <div id='nav'>";
  let menuClass = "'active'";
  for (const option of options) {
    navMenu += ACLASS;
    navMenu += menuClass;
    navMenu += HREF;
    navMenu += "'" + option[0] + "'";
    // Add JS link if one exists
    if (option[2]) {
      navMenu += JSCLICK;
      navMenu += option[2] + "'";
    }
    navMenu += '>' + option[1] + '</a>';
    if (menuClass === "'active'") {
      menuClass = "'inactive'";
    }
  }
  navMenu += '</div>';
  // Add menu ham
  navMenu += addHam();
  return navMenu;
}

function addHam(): string {
  let ham = "<a id='ham' href='javascript:void(0);'>";
  ham += "<img src='/img/Hamburger_icon.svg' alt='menu' onclick='openMenu()'>";
  ham += '</a>';
  return ham;
}

export { makeMenu };
