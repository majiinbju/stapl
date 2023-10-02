<?php snippet('header') ?>

<div class="mx-auto flex justify-center align-top min-w-full min-h-fit">
	<ul>
		<?php if ($projectsPage = page('projects')): ?>
		<?php foreach ($projectsPage->children()->listed() as $project): ?>
		<li class="my-5 section flex align-top">
			<div class="slider-container ">
				<ul class="inner-slider">
					<!-- Project Tags -->
					<div class="min-w-fit min-h-fit px-10">
						<span class="flex flex-col">
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

					</div>
					<!-- End of Project Tags -->
					
					<!-- Project Images -->
					<?php foreach ($project->images() as $image) : ?>
					<li class="min-w-fit">
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