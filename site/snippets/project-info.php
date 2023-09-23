<?php if ($projectsPage = page('projects')): ?>
<?php foreach ($projectsPage->children()->listed() as $project): ?>
	<div class="flex justify-center">
		<figcaption class="px-10 flex justify-end w-1/4">
			<span class="flex flex-col">
				<span class="flex mb-2">
					<div class="w-10 h-10 bg-black"></div>
				</span>
				<span class="text-black"><?= $project->title()->esc() ?></span>
				<span class="text-gray-500 uppercase text-sm"><?= $project->location() ?></span>
				<?php snippet('tags') ?>
			</span>
		</figcaption>
		<?php?>
		<span class="img w-1/4" style="--w:4;--h:5">
			<?php if ($cover = $project->cover()): ?>
			<img src="<?= $cover->crop(500, 500)->url() ?>" alt="<?= $cover->alt()->esc() ?>">
			<?php endif ?>
		</span>
	
		<p class="px-10 text-black text-sm w-1/4">
			<?= $project->text() ?>
		</p>
	</div>
<?php endforeach ?>
<?php endif ?>