<?php
	$homePage = page('home');
?>
	
	<?php if($homePage->navigation()->isNotEmpty()): ?>
	<div class="container-fluid w-75 d-flex justify-content-center contact-container mb-5">
		<navbar class="w-100 d-flex justify-content-between">
			<!-- For loop for navigation items -->
			<?php foreach($homePage->navigation()->toStructure() as $nav): ?>
			<!--  -->
			<?php if($nav->children()->isNotEmpty()): ?>
			
				<a href="<?php echo $nav->url(); ?>" <?php e($nav->isOpen(), 'aria-current') ?> class="animated dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					<?php echo $nav->title() ?>
					<?php echo $nav->text() ?>
				</a>
				<ul class="dropdown-menu dropdown-menu-end text-end border-0 p-2">
					<?php foreach($nav->children()->toStructure() as $child): ?>
					<li class="dropdown-item p-0">
						<a href="<?php echo $child->url() ?>" class="animated">
							<?php echo $child->text() ?>
						</a>
					</li>
					<?php endforeach ?>
				</ul>
			<?php endif ?>
			
			<?php if($nav->children()->isEmpty()): ?>
			
				<a href="<?php echo $nav->url(); ?>" <?php e($nav->isOpen(), 'aria-current') ?> class="animated ">
					<?php echo $nav->text() ?>
				</a>
			<?php endif ?>
			<?php endforeach ?>
		</navbar>
		
	</div>
	<?php endif ?>