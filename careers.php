<!DOCTYPE html>

<html lang="en">
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Rook Website">
		<meta name="author" content="Rook Web Developer">
		<title>Rook Digital Unlimited | Home</title>
		
		<!-- Font awesome -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<!-- Slick -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="icon" href="assets/images/favicon.ico">
		<!-- CSS only -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">	
		<!-- Custom CSS-->
		<link rel="stylesheet" href="assets/css/css-staging/main.css">
		<link rel="stylesheet" href="assets/css/css-staging/nav.css">
        <link rel="stylesheet" href="assets/css/css-staging/banner.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/about-us.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/featured-projects.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/projects.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/portfolio.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/news.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/team.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/careers.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/footer.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/careers-lp.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/careers-archive-rv.css"/>
		<link rel="stylesheet" href="assets/css/css-staging/careers-modal.css"/>
	
		
		
		<!-- JavaScript Bundle with Popper -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>

		

		
</head>
<body>

<div class="preloader" id="preloader">
        <img src="assets/images/images-staging/loading_rook.gif" class="preloader-gif" id="preloader-gif"></img>
    </div>
<div class="wrapper">

<?php
    include ('nav-careers.html');
	include ('ext-careers-lp.html');
	include ('ext-careers.html');
	include ('footer-c.html');
?>

    


	<!-- Modal for email form -->
	
</div>
<div class="modal fade" id="emailForm" tabindex="-1" aria-labelledby="emailForm" aria-hidden="true">
        <div class="modal-dialog modal-xl">
			<div class="modal-content">
				<button type="button" class="btn-close c-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
				<div class="container-fluid c-modal-cont">
					
					<div class="row">
					

						<div class="col-12 c-modal-title">
							<h2>Be Legendary</h2>
							<p>Join our team of world-class marketing and creative experts</p>
						</div>
						<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 c-modal-left">

							<p><span>*</span> Full Name</p>
							<div class="col-12">
								<input class="form-control input-name" type="text" placeholder="John Doe" >
							</div>
							<p><span>*</span> Email Address</p>
							<div class="col-12">
								<input class="form-control input-email" type="text" placeholder="e.g. johndoe@example.com"/>
							</div>
							
							<p>Cover Letter (Optional)</p>
							<div class="col-12">
								<textarea class="form-control input-coverletter" placeholder="Your cover letter here..."></textarea>
							</div>
							
							
						</div>
						<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 c-modal-right">
							<p><span>*</span> Job Position</p>
							<div class="col-12">
								
								<input class="form-control input-job" type="text" placeholder="Readonly input here…" id="job-pos" readonly>
								
							</div>
							
							<p><span>*</span> Contact Number</p>
							<div class="col-12">
								<input class="form-control input-contactnum" type="text" placeholder="e.g. +63 1234 5678"/>
							</div>
							
							<p><span>*</span> Upload your resume</p>
							<div class="col-12 order-md-last">
								

									<form action="#" id="filebox-upload">
										<span class="c-modal-hlt"><i class="fa fa-upload"></i> Choose a file </span> 
										<p class="c-modal-drg">or drag it here</p>

										
										<input class="file-input" type="file" name="files" accept=".doc, .docx, .png, .jpg, .pdf, .rar, .zip, .7z, .gz" >
										<div class="c-modal-hltsub">
											<p> 
												Only DOC/DOCX | PNG/JPG | PDF | RAR/ZIP
												Maximum file size: 10 MB
											</p>
										</div>
									<!--
										<div class="container">
											<div class="row">
												<div class="col-12">
													<span class="c-modal-hlt"><i class="fa fa-upload"></i> Choose a file </span> or drag it here
												</div>
												<div class="col-12 c-modal-hltsu">
													<div class="c-modal-hltsub">
														<p> 
															Only DOC | DOCX | PDF Maximum file size: 10 MB
														</p>
													</div>
												</div>	
											</div>
										</div>
									-->
									</form>
									<section class="progress-area"></section>
									<section class="uploaded-area"></section>
							</div>
							
							
						</div>
						<div class="col-12 c-modal-btn">
							<button class="c-modal-button">SUBMIT APPLICATION</button>
						</div>
					</div>
				</div>	
		
			
			</div>
        </div>
	</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://smtpjs.com/v3/smtp.js"></script>

	<script src="assets/js/js-staging/preloader.js"></script>
	<script src="assets/js/js-staging/navbar-scroll.js"></script>
	<script src="assets/js/js-staging/navbar-overlay.js"></script>
	<script src="assets/js/js-staging/project-overlay.js"></script>
	<script src="assets/js/js-staging/portfolio.js"></script>
	<script src="assets/js/js-staging/c-modal-upload.js"></script>
	<script src="assets/js/js-staging/file-upload.js"></script>
	<script src="assets/js/js-staging/cl-upload.js"></script>
	<script src="assets/js/js-staging/jp-modal.js"></script>

	
</body>
</html>

