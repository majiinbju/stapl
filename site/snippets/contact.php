<?php
$homePage = page('home');
?>

<?php if ($homePage->navigation()->isNotEmpty()) : ?>
	<div class="container-fluid w-75 d-flex justify-content-center contact-container mb-5">
		<navbar class="w-100 d-flex justify-content-between">
			<ul class="ul w-100 d-flex justify-content-between">
				<li class="col-1">
					<!-- Email -->
					<a href="mailto:soyuztalibarchitects@gmail.com" target="_blank" class="animated" aria-expanded="false">
						Email ↗
					</a>
				</li>
				<li class="col-1">
					<!-- Office -->
					<a href="#collapseOffice" class="animated dropdown-toggle" data-bs-toggle="collapse" aria-expanded="false">
						Office
					</a>
					<p class="collapse footer-text" id="collapseOffice" aria-controls="collapseOffice">
						1405/1406, 14th Floor,</br>
						Kesar Solitaire, Plot no. 5,</br>
						Sector - 19,Off Palm Beach Road,</br>
						Sanpada, Navi Mumbai - 400 705
					</p>
				</li>
				<li class="col-1">
					<a href="#collapseSocial" class="animated dropdown-toggle" data-bs-toggle="collapse" aria-expanded="false">
						Social
					</a>
					<ul class="flex-column collapse ul footer-text" id="collapseSocial" aria-controls="collapseSocial">
						<li>
							<a href="https://www.instagram.com/soyuz_talib_architects" target="_blank">Instagram ↗</a>
						</li>
						<li>
							<a href="https://www.facebook.com/Soyuz.Kavita" target="_blank">Facebook ↗</a>
						</li>
					</ul>
				</li>
			</ul>
	</div>
<?php endif ?>