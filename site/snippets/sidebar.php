<nav class="navbar side">
	<div class="container-fluid">
		<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			<img src="../assets/logo/stapl-logo.svg" alt="Stapl logo" class="logo">
		</button>
	</div>
</nav>

<div class="mx-3 fit-content absolute" id="navbarToggleExternalContent" style="width:300px;">
	<nav class="d-flex flex-column sidebar" style="width:300px;">
		<?php foreach ($site->children()->listed() as $item): ?>
		<a <?php e($item->isOpen(), 'aria-current="page"') ?> href="<?= $item->url() ?>" class="nav-item"><?= $item->title()->esc() ?></a>
		<?php endforeach ?>
		
		<a href="#contact" class="nav-item">Contact</a>
		
		<?php snippet('social') ?>
	</nav>
</div>