<?php if ($projectsPage = page('projects')): ?>
<?php foreach ($projectsPage->children()->listed() as $project): ?>
		
			<span class="flex flex-col">
				<span class="flex mb-2">
					<div class="w-10 h-10 bg-black"></div>
				</span>
				<span class="text-black"><?= $project->title()->esc() ?></span>
				<span class="text-gray-500 uppercase text-sm"><?= $project->location() ?></span>
				<?php snippet('tags') ?>
			</span>
			
	
	
<?php endforeach ?>
<?php endif ?>