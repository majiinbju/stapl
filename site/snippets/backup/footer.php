</main>

<footer class="footer">
<!-- Libraries -->

	<!-- Bootstrap -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

	<!-- GSAP -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

	<!-- Flickity.js -->
	<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
	<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
	
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	
	<!-- Draggable & Interact.js -->
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js" integrity="sha512-S6SXKUZ11xkCoD/UuhdXG4B4iiCXng+xW2KCx0lgfQqmdqtjqGgm4WChdYIhO1F/CmH21vnkSUvPEgXNgDwkjg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script src="https://unpkg.com/interactjs/dist/interact.min.js"></script> -->

</footer>


<?= js([
		'assets/js/index.js',
		'assets/js/scroll.js',
		'assets/js/carousel.js',
		'assets/js/animation.js',
		'@auto'
	], ['async' => true, 'defer' => true, 'model' => true]) ?>
</body>

</html>