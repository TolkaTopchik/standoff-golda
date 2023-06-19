function redirectToOtherSite() {
    localStorage.setItem("redirect", "true");
    window.location.href = "/Реистрация.html";
  }
  
  if (localStorage.getItem("redirect") === "true") {
    localStorage.removeItem("redirect");
    window.location.href = "/Реистрация.html";
  }