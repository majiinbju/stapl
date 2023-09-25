<?php if ($projectsPage = page('projects')): ?>
<?php foreach ($projectsPage->children()->listed() as $project): ?>
<div class="slider-container ">
	<ul class="inner-slider">
	<div class="min-w-max min-h-fit px-10"><?php snippet('project-info') ?></div>
	<?php foreach ($project->images() as $image) : ?>
		<li>
			<a href="<?= $image->url() ?>" class="flex card relative">
				
				<img src="<?= $image->crop(500,500)->url() ?>" class="" alt="<?= $image->alt() ?>" />
				<?php if ($image->caption()->isNotEmpty()) : ?>
				<p class="px-10 text-sm">
					<?= $image->caption()->smartypants() ?>
				</p>
				<?php endif ?>
		
			</a>
		</li>
	<?php endforeach ?>
	
	<?php endforeach ?>
	</ul>
</div>
<?php endif ?>