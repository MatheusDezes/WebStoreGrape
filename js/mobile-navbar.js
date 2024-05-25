//======Header Responsivo========//
class mobileNavbar {
    constructor(biList, listHeader, navLinks) {
      this.biList = document.querySelector(biList);
      this.listHeader = document.querySelector(listHeader);
      this.navLiks = document.querySelector(navLinks);
      this.activeClass = "active";
    }
  
    addClickEvent() {
      this.biList.addEventListener("click", () => console.log(Heyaadadad));
    }
  
    init() {
      if(this.biList) {
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