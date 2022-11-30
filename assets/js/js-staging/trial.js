
$("#bc-btn").click(()=>{
    console.log("umaabot dito sa bc btn");
    $("#job-bc").val("Blockchain Developer");
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
                
                Host : "smtp.elasticemail.com",
                Username : "hr@rookdigitalunlimited.com",
                Password : "174D8098F181E0719D50252B33566112B786",
                To : 'hr@rookdigitalunlimited.com',
                From : "hr@rookdigitalunlimited.com",
                Subject : "JOB APPLICATION - " + jobPosition,
                Body : "Name: " + name + "<br>" + "Email " + email + "<br>" + "Job position: " + jobPosition + "<br>" + "Contact number : " + contactNumber + "<br>" + "Cover letter introduction: " + coverLetter,
                Attachments: [{
                  name: name+"-CV-"+ jobPosition + "."+ fileExt,
                  data: fileBase64
                }]
            }).then(
              message => alert(message)
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