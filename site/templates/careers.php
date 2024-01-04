<?php snippet('header') ?>
<main>

	<section class="container col-12">
		<h1 class="pageTitle"><?= $page->title() ?></h1>
		<!-- Text columns -->
		<div class="d-sm-flex container-fluid my-5">
			<p class="careers-body col-sm-12 col-lg-5 me-5">
				<?= $page->text()->kirbytextinline() ?>
			</p>
			<p class="careers-body col-sm-12 col-lg-5">
				<?= $page->text2()->kirbytextinline() ?>
			</p>
		</div>
		<!-- Render Job Postings -->
		<table class="w-100 jobTable text-uppercase p-2">
			<tr class="d-flex">
				<th class="col-4">Title</th>
				<th class="col-4">Job Area</th>
				<th class="col-4">Deadline</th>
				<th class="col-4">Apply Now</th>
			</tr>
			<?php foreach ($page->children()->filterBy('intendedTemplate', 'job') as $posting): ?>
			<tr class="d-flex jobTableRow py-2">
				<td class="col-4"><?= $posting->position() ?></td>
				<td class="col-4"><?= $posting->area() ?></td>
				<td class="col-4"><?= $posting->deadline() ?></td>
				<td class="col-4">
					<a href="<?= $posting->link() ?>" class="jobLink">
						Apply Here
					</a>
				</td>
			</tr>
			<?php endforeach ?>
		</table>

		<!-- Render Carousels -->
		<?php foreach ($page->children()->filterBy('intendedTemplate', 'pagesection') as $pageSection): ?>
		<section class="container">
			<!-- Section Title -->
			<h2 class="sectionTitle">
				<?= $pageSection->title() ?>
			</h2>
			<!-- Section Text -->
			<div class="d-sm-flex container-fluid my-5">
				<p class="col-sm-12 col-lg-5 me-5 careers-body">
					<?= $pageSection->Column1()->kirbytextinline() ?>
				</p>
				<p class="col-sm-12 col-lg-5 careers-body">
					<?= $pageSection->Column1()->kirbytextinline() ?>
				</p>
			</div>
			<!-- Section Galleries -->
			<div class="carousel">
				<ul class="ul draggable">
					<?php foreach ($pageSection->images() as $image) : ?>
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


	</section>
</main>
<?php snippet('footer') ?>