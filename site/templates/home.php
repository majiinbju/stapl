<?php snippet('header') ?>
<?php
	$filterBy = get('filter');
	$projectsPage = page('projects');
	$projects = $projectsPage
		->children()
		->listed()
		->when($filterBy, function($filterBy) {
		return $this->filterBy('category', $filterBy);
		})

?>

<div class="container-fluid mt-5">
	<ul>
		<?php foreach ($projectsPage->children() as $project): ?>
		<li class="section d-flex mx-auto">
			<div class="carousel">
				<ul class="ul draggable">
					<!-- Project Tags -->
					<li class="li d-flex project-info">
						<?php snippet('tags', compact('project')) ?>
						<!-- Project Cover -->
						<figure class="d-flex w-100">
							<?php if ($cover = $project->cover()): ?>
								<img src="<?= $cover->crop(1000, 800, 100)->url() ?>" alt="<?= $cover->alt() ?>">
							<?php endif ?>
							<figcaption class="hidden mx-5 summary">
								<?= $project->text() ?>
							</figcaption>
						</figure>
					</li>
					<!-- End of Project Tags -->
					
					
					<!-- Project Images -->
					<?php foreach ($project->images()->offset(1) as $image) : ?>
					<li class="li hidden">
					<?php if ($image->caption()->isNotEmpty()) : ?>
						<figure class="d-flex w-100">
							<img src="<?= $image->resize(null, 800)->url() ?>" alt="<?= $image->alt() ?>" />
							<figcaption class="mx-5 summary">
								<?= $image->caption()->smartypants() ?>
							</figcaption>
						</figure>
						<?php else: ?>
						<figure class="w-100 mx-2">
							<img src="<?= $image->resize(null, 800)->url() ?>" alt="<?= $image->alt() ?>" />
						</figure>
						<?php endif ?>
					</li>
					<?php endforeach ?>
					<!-- End of Project Images -->
				</ul>
			</div>
		</li>
		<?php endforeach ?>
	</ul>
</div>


<?php snippet('footer') ?>