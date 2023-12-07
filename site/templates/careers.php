<?php snippet('header') ?>
<main class="about">
	<section class="container col-10">
		<h1 class="pageTitle"><?= $page->title() ?></h1>
		<!-- Text columns -->
		<div class="d-sm-flex container-fluid my-5">
			<p class="careers-body col-sm-12 col-lg-5 me-5">
				<?= $page->text() ?>
			</p>
			<p class="careers-body col-sm-12 col-lg-5">
				<?= $page->text2() ?>
			</p>
		</div>
		<table class="w-100 jobTable text-uppercase">
			<tr class="d-flex justify-content-between">
				<th>Title</th>
				<th>Apply</th>
			</tr>
			
			<?php foreach ($page->children() as $posting): ?>
				
				<tr class="d-flex justify-content-between jobTableRow">
					<td><?= $posting->position() ?></td>
					<td><a href="<?= $posting->link() ?>">
							Apply Here
						</a></td>
				</tr>
			<?php endforeach ?>
		</table>
		
	</section>
</main>
<?php snippet('footer') ?>