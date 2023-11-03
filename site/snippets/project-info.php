<span class="flex flex-col px-10 information">
	<span class="flex mb-2">
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