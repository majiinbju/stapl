<?php snippet('header') ?>
<main class="news">
	<section class="container w-75">
		<h1 class="pageTitle"><?= $page->title() ?></h1>
		<?php foreach($page->children()->listed()->flip() as $article): ?>
			<article class="my-5 ms-5">
				<div class="d-flex">
					<!-- Date -->
					<?php if ($article->date()->isNotEmpty()): ?>
							<p class="article-date mx-5">
								<?= $article->date() ?>
							</p>
					<?php endif ?>
					<!-- Image -->
					<?php if ($cover = $article->image()): ?>
							<img src="<?= $cover->crop(1280, 800)->url() ?>" alt="<?= $cover->alt() ?>" class="article-img">
					<?php endif ?>
					<div class="d-flex flex-column mx-5">
						<!-- Title -->
						<h2>
						<?php if ($article->title()->isNotEmpty()): ?>
							<?= $article->title()->html() ?>
						<?php endif ?>
						</h2>
						<!-- Text -->
						<?php if ($article->text()->isNotEmpty()): ?>	
						<p class="article-body">
							<?= $article->text() ?>
						</p>
						<?php endif ?>
					</div>
				</div>
			</article>
		<?php endforeach ?>
	</section>
</main>
<?php snippet('footer') ?>