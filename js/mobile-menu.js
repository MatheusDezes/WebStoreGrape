//======Header Responsivo========//
class mobileNavbar {
    constructor(mobileMenu) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.listHeader = document.querySelector(listHeader);
      this.navLiks = document.querySelector(navLiks);
      this.activeClass = "active";
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", () => console.log(HeyCarai));
    }
  
    init() {
      if(this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new mobileNavbar(
    ".mobile-menu",
    ".list-header",
    ".list-header li",
  );
  mobileNavbar.init();
  //======Header Responsivo/========//