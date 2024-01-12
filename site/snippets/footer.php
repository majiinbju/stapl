<footer class="footer" id="contact">
	<br />
	<br />
	<?php snippet('contact') ?>
	<br />
	<br />
</footer>
<!-- Swup for page transitions -->
<script type="module" src="https://unpkg.com/@swup/head-plugin@2"></script>
<script type="module" src="https://unpkg.com/@swup/scripts-plugin@2"></script>
<script type="module" data-swup-ignore-script>
	import Swup from 'https://unpkg.com/swup@4?module';
	const swup = new Swup({
		plugins: [
			new SwupHeadPlugin({
				awaitAssets: true
			}),
			new SwupScriptsPlugin()
		]
	});
</script>
<!-- Libraries -->
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<!-- Draggable + ScrollTo for GSAP-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>


</body>

</html>