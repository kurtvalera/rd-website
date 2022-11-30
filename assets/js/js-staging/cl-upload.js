const formCL = document.querySelector(".form-cl"),
fileInputCL = document.querySelector(".file-input-cl"),
progressAreaCL = document.querySelector(".progress-area-cl"),
uploadedAreaCL = document.querySelector(".uploaded-area-cl");

// form click event
formCL.addEventListener("click", () =>{
  fileInputCL.click();
  console.log("Form 1 - cover letter");
});

fileInputCL.onchange = ({target})=>{
  let file = target.files[0]; //getting file [0] this means if user has selected multiple files then get first one only
  if(file){
    let fileName = file.name; //getting file name
    if(fileName.length >= 12){ //if file name length is greater than 12 then split it and add ...
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFileCL(fileName); //calling uploadFile with passing file name as an argument
  }
}

// file upload function
function uploadFileCL(name){
  let xhr = new XMLHttpRequest(); //creating new xhr object (AJAX)
  xhr.open("POST", "php/upload.php"); //sending post request to the specified URL
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{ //file uploading progress event
    let fileLoaded = Math.floor((loaded / total) * 100);  //getting percentage of loaded file size
    let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
    let fileSize;
    // if file size is less than 1024 then add only KB else convert this KB into MB
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
    uploadedAreaCL.classList.add("onprogress");
    progressAreaCL.innerHTML = progressHTML;
    if(loaded == total){
      progressAreaCL.innerHTML = "";
      let uploadedHTMLCL = `<li class="row file-uploaded">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                               
                              </div>
                            </div>
                            
                          </li>`;
      uploadedAreaCL.classList.remove("onprogress");
      // uploadedArea.innerHTML = uploadedHTML; //uncomment this line if you don't want to show upload history
      uploadedAreaCL.insertAdjacentHTML("afterbegin", uploadedHTMLCL); //remove this line if you don't want to show upload history
    }
  });
  let data = new FormData(formCL); //FormData is an object to easily send form data
  xhr.send(data); //sending form data
}
