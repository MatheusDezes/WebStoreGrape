//======Navbar Mobile========//
  const hamburger = document.querySelector(".hamburger");
  
  const listHeader = document.querySelector(".list-header");

  hamburger.addEventListener("click", () => 
  listHeader.classList.toggle("active"));
  

  const search = document.querySelector(".icon-search");
  
  const containerSearch = document.querySelector(".container-search");
  
  search.addEventListener("click", () => 
    containerSearch.classList.toggle("open"));
  
  
  const openshow = document.querySelector(".openshow");
  
  const listHeader2 = document.querySelector(".list-header");
  
  openshow.addEventListener("click", () => 
    listHeader2.classList.toggle("active"));
  
  //======Navbar Mobile/========//