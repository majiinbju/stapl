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

<div class="mx-auto flex flex-col justify-center align-center min-w-full my-auto">
	
	<ul>
		
		<?php foreach ($projectsPage->children() as $project): ?>
		<li class="mx-auto my-24 section flex center">
			<div class="carousel">
				<ul class="ul draggable min-w-fit">
					<!-- Project Tags -->
					<div class="min-w-fit flex justify-center">
						<!-- Project Information -->
						<span class="flex flex-col px-10 information">
							<span class="mb-2">
								<?php if ($project->icon()->isNotEmpty()): ?>
									<?php if ($icon = $project->icon()): ?>
										<img src="<?= $icon->crop(50)->url() ?>" alt="<?= $icon->alt() ?>">
									<?php endif ?>
								<?php endif ?>
								<div class="w-10 h-10 bg-black"></div>
							</span>
							<span class="text-black"><?= $project->title()->esc() ?></span>
							<span class="text-gray-500 uppercase text-sm"><?= $project->location() ?></span>
							<ul class="my-4 hidden">
								<?php if ($project->typology()->isNotEmpty()): ?>
								<li class="flex flex-col my-2">
									<span class="text-sm text-black capitalize">Typology</span>
									<span class="text-sm text-gray-500"><?= $project->typology() ?></span>
								</li>
								<?php endif ?>
								<?php if ($project->Plotarea()->isNotEmpty()): ?>
								<li class="flex flex-col my-2">
									<span class="text-sm text-black capitalize">Plot Area</span>
									<span class="text-sm text-gray-500"><?= $project->Plotarea() ?></span>
								</li>
								<?php endif ?>
								<?php if ($project->Builtarea()->isNotEmpty()): ?>
								<li class="flex flex-col my-2">
									<span class="text-sm text-black capitalize">Built Area</span>
									<span class="text-sm text-gray-500"><?= $project->Builtarea() ?></span>
								</li>
								<?php endif ?>
								<?php if ($project->levels()->isNotEmpty()): ?>
								<li class="flex flex-col my-2">
									<span class="text-sm text-black capitalize">Levels</span>
									<span class="text-sm text-gray-500"><?= $project->levels() ?></span>
								</li>
								<?php endif ?>
							</ul>
						</span>
						<!-- Project Cover -->
						<figure class="flex flex-grow fit">
							<?php if ($cover = $project->cover()): ?>
								<img src="<?= $cover->crop(600)->url() ?>" alt="<?= $cover->alt() ?>">
							<?php endif ?>
							<figcaption class="px-10 text-sm w-100 hidden card summary">
								<?= $project->text() ?>
							</figcaption>
						</figure>
					</div>
					<!-- End of Project Tags -->
					
					
					<!-- Project Images -->
					<?php foreach ($project->images()->offset(1) as $image) : ?>
					<li class="li hidden min-w-fit">
					<?php if ($image->caption()->isNotEmpty()) : ?>
						<figure class="flex fit card">
							<img src="<?= $image->crop(600)->url() ?>" alt="<?= $image->alt() ?>" class="w-50" />
							<figcaption class="px-10 text-sm w-100">
								<?= $image->caption()->smartypants() ?>
							</figcaption>
						</figure>
						<?php else: ?>
						<figure class="flex flex-grow fit px-10">
							<img src="<?= $image->crop(600)->url() ?>" alt="<?= $image->alt() ?>" />
						</figure>
						<?php endif ?>
					</li>
					<?php endforeach ?>
					<!-- End of Project Images -->
					
						<div class="card hidden"></div>
				</ul>
			</div>
		</li>
		<?php endforeach ?>
	</ul>
	
</div>

<?php snippet('footer') ?>