window.onload = function() {
    fetch("sections/about.html").then(data => data.text()).then(data => {
        document.querySelector("#about").innerHTML = data
      })
      fetch("sections/projects.html").then(data => data.text()).then(data => {
        document.querySelector("#projects").innerHTML = data
      })
      fetch("sections/contact.html").then(data => data.text()).then(data => {
        document.querySelector("#contact").innerHTML = data
      })
}

/*
$("#bc-btn").click(()=>{
  console.log("umaabot dito sa bc btn");
  $("#job-bc").val("Blockchain Developer");
});

*/


