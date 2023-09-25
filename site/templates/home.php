<?php snippet('header') ?>

<div class="container mx-auto flex justify-center min-w-full">
	<?php if ($projectsPage = page('projects')): ?>
	<ul>
		<?php foreach ($projectsPage->children()->listed() as $project): ?>
		<li class="my-5 section">
				
					
						<?php snippet('project-gallery') ?>
					
				
		</li>
		<?php endforeach ?>
	</ul>
	<?php endif ?>
</div>

<?php snippet('footer') ?>