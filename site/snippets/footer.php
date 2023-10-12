
	</main>

	<footer class="footer">
	</footer>

	<?= js([
		'assets/js/index.js',
		'assets/js/carousel.js',
		'assets/js/animation.js',
		'@auto'
	], ['async' => true, 'defer' => true, 'model' => true]) ?>
</body>
</html>
