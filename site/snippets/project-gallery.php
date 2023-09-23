<?php if ($projectsPage = page('projects')): ?>
<?php foreach ($projectsPage->children()->listed() as $project): ?>
<div class="slider-container">
	<ul class="flex inner-slider">
		
	<?php foreach ($project->images()->offset(1) as $image) : ?>
		<li class="p-10">
			<a href="<?= $image->url() ?>" class="flex card relative">
		
				<img src="<?= $image->crop(500,500)->url() ?>" class="" alt="<?= $image->alt() ?>">
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