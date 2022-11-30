
$("#bc-btn").click(()=>{

  $("#job-pos").val("Blockchain Developer");
});

$("#ui-btn").click(()=>{

  $("#job-pos").val("UI/UX Designer");
});



$("#mm-btn").click(()=>{

  $("#job-pos").val("Multimedia Designer");
});



$("#cs-btn").click(()=>{
 
  $("#job-pos").val("Content Specialist");
});

$("#3d-btn").click(()=>{
 
  $("#job-pos").val("3D Concept Artist & Animator");
});

$("#3d-btn").click(()=>{
 
  $("#job-pos").val("3D Concept Artist & Animator");
});

$("#das-btn").click(()=>{
 
  $("#job-pos").val("Digital Ads Specialist");
});






function removeUpload(){
console.log("REMOVE FILE");
$(".file-uploaded").remove();
}
/*
$(".c-modal-button").click(()=>{
  console.log("Send email button");
  let jobPosition = $(".input-job").val();
  let name = $(".input-name").val();
  let email = $(".input-email").val();
  let contactNumber = $(".input-contactnum").val();
  let coverLetter = $(".input-coverletter").val();

  let ft = $(".file-input").val();

  let fileTransfer = $(".file-input")[0];
  
  var myFile = $(".file-input").prop('files');
  

});



*/

var handleFileSelect = function(evt) {

const allowedTypes = new Set(['png','jpg', 'doc', 'docx', 'pdf', 'rar', 'zip', 'gz', '7z']);

let fileValidation = $(".file-input").val();
let fileExt = fileValidation.split(".").pop();


if(allowedTypes.has(fileExt)){

  var files = evt.target.files;
  var file = files[0];
  if (files && file) {
      var reader = new FileReader();

      reader.onload = function(readerEvt) {

          $(".c-modal-button").click(()=> {
            var binaryString = readerEvt.target.result;
            var fileBase64 = btoa(binaryString);
            console.log(fileBase64);
            console.log("Send email button");
            let jobPosition = $(".input-job").val();
            let name = $(".input-name").val();
            let email = $(".input-email").val();
            let contactNumber = $(".input-contactnum").val();
            let coverLetter = $(".input-coverletter").val();
            let fileName = $(".file-input").val();
            console.log(fileName + ": FIle name")
            let fileExt = fileName.split(".").pop();
            console.log("File extension: " + fileExt);
            Email.send({
              SecureToken:"0BF5A1D4-80ED-4ABE-8068-DB207FF4E36F",
              Username : "hr@rookdigitalunlimited.com",
              Password : "B03F686876CF3E8AB5F963E4AA6AE4338091",
              To : 'hr@rookdigitalunlimited.com',
              From : "hr@rookdigitalunlimited.com",
              Subject : "JOB APPLICATION - " + jobPosition,
              Body : "Name: " + name + "<br>" + "Email " + email + "<br>" + "Job position: " + jobPosition + "<br>" + "Contact number : " + contactNumber + "<br>" + "Cover letter introduction: " + coverLetter,
              Attachments: [{
                name: name+"-CV-"+ jobPosition + "."+ fileExt,
                data: fileBase64
              }]
          }).then(
            message => console.log(message + " ")
          );
  
          });
          
        

        
    };

  reader.readAsBinaryString(file);

}
} else {
 
  setTimeout(function(){
    $(".file-uploaded").remove()
    
  },100);
}



};



document.addEventListener("DOMContentLoaded", function() { 
if (window.File && window.FileReader && window.FileList && window.Blob) {
   document.querySelector('.file-input').addEventListener('change', handleFileSelect, false);
} else {
    alert('Error');
}




























/*
 
  Email.send({
    
    Host : "smtp.elasticemail.com",
    Username : "kurt@rookdigitalunlimited.com",
    Password : "B6315CDBD5CA06DC8706EE84801CB9B0F91B",
    To : 'kurt@rookdigitalunlimited.com',
    From : email,
    Subject : "Test",
    Body : coverLetter,
    Attachments: [{
      name:ft
    }]
}).then(
  message => alert(message)
);
*/
  //console.log(jobPosition + " " + name + " " + email + " " + contactNumber + " " + coverLetter + " ");
 
 


});