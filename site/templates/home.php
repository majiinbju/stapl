<?php snippet('header') ?>
<div class="wall"></div>
<div class="animation">
	<h1>Stapl</h1>
	
</div>
<?php snippet('sidebar') ?>

<div class="mx-auto flex justify-center align-top min-w-full min-h-fit">
	<ul>
		<?php if ($projectsPage = page('projects')): ?>
		<?php foreach ($projectsPage->children()->listed() as $project): ?>
		<li class="my-5 section flex align-top mx-auto">
			<div class="slider-container ">
				<ul class="inner-slider">
					<!-- Project Tags -->
					<div class="min-h-fit flex justify-center">
						<span class="flex flex-col px-10 information">
							<span class="flex mb-2">
								<div class="w-10 h-10 bg-black"></div>
							</span>
							<span class="text-black"><?= $project->title()->esc() ?></span>
							<span class="text-gray-500 uppercase text-sm"><?= $project->location() ?></span>
							<ul class="my-4">
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
						
						<figure class="flex card">
							<?php if ($cover = $project->cover()): ?>
								<img src="<?= $cover->crop(500, 500)->url() ?>" alt="<?= $cover->alt()->esc() ?>">
							<?php endif ?>
							<figcaption class="px-10 text-sm w-100 hidden">
								<?= $project->text() ?>
							</figcaption>
						</figure>
						
						
					</div>
					<!-- End of Project Tags -->
					
					<!-- Project Images -->
					<?php foreach ($project->images()->offset(1) as $image) : ?>
					<li class="min-w-fit hidden">
						<?php if ($image->caption()->isNotEmpty()) : ?>
						<figure class="flex card">
							<img src="<?= $image->crop(900, 900)->url() ?>" class="" alt="<?= $image->alt() ?>" />
							<figcaption class="px-10 text-sm w-100">
								<?= $image->caption()->smartypants() ?>
							</figcaption>
						</figure>
						<?php else: ?>
						<figure class="img">
							<img src="<?= $image->crop(900, 900)->url() ?>" class="img" alt="<?= $image->alt() ?>" />
						</figure>
						<?php endif ?>
					</li>
					<!-- End of Project Images -->
					<?php endforeach ?>
					
				</ul>
			</div>
		</li>
		<?php endforeach ?>
	</ul>
	<?php endif ?>
</div>

<?php snippet('footer') ?>