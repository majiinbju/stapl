<header class="fixed my-10 w-1/12 p-6 drop-shadow-xl sidebar">
	
	<a class="underline text-xl logo" href="<?= $site->url() ?>">
		<!-- <img src="./assets/logo.svg" alt=""> -->
		
	</a>
	<hr class="my-4 text-gray">
	<nav class="flex flex-col text-gray-400 text-sm uppercase">
		
		<?php foreach ($site->children()->listed() as $item): ?>
		<a <?php e($item->isOpen(), 'aria-current="page"') ?> href="<?= $item->url() ?>"><?= $item->title()->esc() ?></a>
		<?php endforeach ?>
		<?php snippet('social') ?>
	</nav>
</header> 