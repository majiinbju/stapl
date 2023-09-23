<?php if ($projectsPage = page('projects')): ?>
<?php foreach ($projectsPage->children()->listed() as $project): ?>
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
<?php endforeach ?>
<?php endif ?>