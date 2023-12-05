</main>

<footer class="footer my-5 mb-5" id="contact">
	<br/>
	<br/>
	<div class="container d-flex justify-content-center contact-container mb-5">
		<navbar class="col-sm-6 col-lg-12 d-flex justify-content-between">
			<a href="#">Email +</a>
			<a href="#">Offices +</a>
			<a href="#">Social +</a>
			<a href="#">Legal +</a>
		</navbar>
	</div>
	<br/>
	<br/>
</footer>
<!-- Libraries -->
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- Animate CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<!-- Draggable + ScrollTo for GSAP-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>

<!-- Bootstrap JS (deferred for faster loading) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer></script>

<!-- Custom Scripts -->
<?= js([
		'assets/js/index.js',
		'assets/js/animation.js',
		'@auto'
], ['async' => true, 'defer' => true, 'model' => true]) ?>


</body>

</html>