<?php
$detect = $page->detect();
$isMobile = $detect->isMobile();
$isTablet = $detect->isTablet();
$isDesktop = !$isMobile && !$isTablet;
?>

<?php snippet('header') ?>

<?php if ($isMobile): ?>
	<section class="container-fluid">
		<h1 class="pageTitle mb-5">
			<?= $page->title() ?>
		</h1>
		
		<?php foreach($page->children()->listed()->flip() as $article): ?>
		<article class="my-3 d-flex flex-column">
			<!-- Date -->
			<?php if ($article->date()->isNotEmpty()): ?>
					<p class="article-date">
						<?= $article->date() ?>
					</p>
			<?php endif ?>
			<!-- Image -->
			<?php if ($cover = $article->image()): ?>
					<img src="<?= $cover->crop(800)->url() ?>" alt="<?= $cover->alt() ?>" class="article-img w-100">
			<?php endif ?>
			<div class="d-flex flex-column my-5">
				<!-- Title -->
				<h2>
				<?php if ($article->title()->isNotEmpty()): ?>
					<?= $article->title()->html() ?>
				<?php endif ?>
				</h2>
				<!-- Text -->
				<?php if ($article->text()->isNotEmpty()): ?>	
				<p class="article-body">
					<?= $article->text()->kirbytextinline() ?>
				</p>
				<?php endif ?>
			</div>
		</article>
		<?php endforeach ?>
	</section>
<?php else: ?>
<main class="news">
	<section class="container w-75">
		<h1 class="pageTitle"><?= $page->title() ?></h1>
		<?php foreach($page->children()->listed()->flip() as $article): ?>
			<article class="my-5">
				<div class="d-flex">
					<!-- Date -->
					<?php if ($article->date()->isNotEmpty()): ?>
							<span class="article-date">
								<?= $article->date() ?>
							</span>
					<?php endif ?>
					<!-- Image -->
					<?php if ($cover = $article->image()): ?>
							<img src="<?= $cover->crop(800)->url() ?>" alt="<?= $cover->alt() ?>" class="article-img mx-5">
					<?php endif ?>
					<div class="d-flex flex-column">
						<!-- Title -->
						<h2>
						<?php if ($article->title()->isNotEmpty()): ?>
							<?= $article->title()->html() ?>
						<?php endif ?>
						</h2>
						<!-- Text -->
						<?php if ($article->text()->isNotEmpty()): ?>	
						<p class="article-body">
							<?= $article->text()->kirbytextinline() ?>
						</p>
						<?php endif ?>
					</div>
				</div>
			</article>
		<?php endforeach ?>
	</section>
</main>
<?php endif ?>

<?php snippet('footer') ?>