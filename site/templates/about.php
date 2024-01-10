<?php snippet('header') ?>
<main>
	<section class="container-fluid w-75">
		<h1 class="pageTitle"><?= $page->title() ?></h1>
		<div class="d-sm-flex container-fluid my-5">
			<p class="col-sm-12 col-lg-5 me-5 aboutBody">
				<?= $page->Column1()->kirbytextinline() ?>
			</p>

			<p class="col-sm-12 col-lg-5 aboutBody">
				<?= $page->Column2()->kirbytextinline() ?>
			</p>
		</div>
	</section>

	<?php foreach ($page->children() as $aboutSection): ?>
	<section class="container-fluid w-75">
		<!-- Section Title -->
		<h2 class="sectionTitle">
			<?= $aboutSection->title() ?>
		</h2>
		<!-- Section Text -->
		<div class="d-sm-flex container-fluid my-5">
			<p class="col-sm-12 col-lg-5 me-5 aboutBody">
				<?= $aboutSection->Column1()->kirbytextinline() ?>
			</p>
			<p class="col-sm-12 col-lg-5 aboutBody">
				<?= $aboutSection->Column1()->kirbytextinline() ?>
			</p>
		</div>
		<!-- Section Galleries -->
		<div class="carousel">
			<ul class="ul draggable">
				<?php foreach ($aboutSection->images() as $image) : ?>
				<li class="li">
					<?php if ($image->alt()->isNotEmpty()) : ?>
					<figure class="d-flex flex-column mx-2">
						<a href="<?= $image->link() ?>">
							<img class="project-img" src="<?= $image->crop(500, 300)->url() ?>" alt="<?= $image->alt() ?>" />
						</a>
						<figcaption class="sectionImageTitle mt-3">
							<?= $image->title() ?>
						</figcaption>
					</figure>
					<?php else: ?>
					<figure class="d-flex mx-2 bg-gray-100">
						<img class="project-img" src="<?= $image->crop(500, 300)->url() ?>" alt="<?= $image->alt() ?>" />
					</figure>
					<?php endif ?>
				</li>
				<?php endforeach ?>
			</ul>
		</div>
	</section>
	<?php endforeach ?>
</main>
<?php snippet('footer') ?>
<script async="true" defer="true" model="true" src="assets/js/about.js"></script>

