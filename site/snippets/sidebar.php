<header class="fixed top-0 left-0 min-h-screen w-1/12 p-6 drop-shadow-xl">
	<?php?>
	<a class="underline text-xl" href="<?= $site->url() ?>">
		<img src="./assets/logo.svg" alt="">
	</a>
	<hr class="my-4 text-gray">
	<nav class="flex flex-col text-gray-400 text-sm uppercase">
		<?php
		?>
		<?php foreach ($site->children()->listed() as $item): ?>
		<a <?php e($item->isOpen(), 'aria-current="page"') ?> href="<?= $item->url() ?>"><?= $item->title()->esc() ?></a>
		<?php endforeach ?>
		<?php snippet('social') ?>
	</nav>
</header>