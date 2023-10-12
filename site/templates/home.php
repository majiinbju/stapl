<?php snippet('header') ?>

<div class="mx-auto flex justify-center align-center min-w-full my-auto">
	<ul>
		<?php if ($projectsPage = page('projects')): ?>
		<?php foreach ($projectsPage->children()->listed() as $project): ?>
		<li class="mx-auto my-24 section flex align-middle">
			<div class="carousel">
				<ul class="ul draggable">
					<!-- Project Tags -->
					<div class="min-h-fit flex justify-center">
						<!-- Project Information -->
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
						<!-- Project Cover -->
						<figure class="flex card">
							<?php if ($cover = $project->cover()): ?>
								<img src="<?= $cover->crop(500, 500)->url() ?>" alt="<?= $cover->alt()->esc() ?>">
							<?php endif ?>
							<figcaption class="px-10 text-sm w-100 hidden information">
								<?= $project->text() ?>
							</figcaption>
						</figure>
					</div>
					<!-- End of Project Tags -->
					
					
					<!-- Project Images -->
					<?php foreach ($project->images()->offset(1) as $image) : ?>
					<li class="li hidden">
						<?php if ($image->caption()->isNotEmpty()) : ?>
						<figure class="flex card">
							<img src="<?= $image->crop(500, 500)->url() ?>" class="" alt="<?= $image->alt() ?>" />
							<figcaption class="px-10 text-sm w-100">
								<?= $image->caption()->smartypants() ?>
							</figcaption>
						</figure>
						<?php else: ?>
						<figure class="fit mx-auto">
							<img src="<?= $image->crop(500, 500)->url() ?>" class="" alt="<?= $image->alt() ?>" />
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
	<?php endif ?>
</div>

<?php snippet('footer') ?>