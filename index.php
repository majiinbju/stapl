<?php

require 'kirby/bootstrap.php';

echo (new Kirby)->render();
require __DIR__ . '/vendor/autoload.php';
use Detection\MobileDetect;
$detect = new MobileDetect();
$detect->setUserAgent('Mozilla/5.0 (iPad; CPU OS 14_7 like Mac OS X) ...');
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');