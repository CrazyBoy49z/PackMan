<?php
/**
 * Template Packager
 *
 * Copyright 2010 by Shaun McCormick <shaun@collabpad.com>
 *
 * This file is part of Template Packager.
 *
 * Template Packager is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * Template Packager is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Template Packager; if not, write to the Free Software Foundation, Inc., 59
 * Temple Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * @package templatepackager
 */
/**
 * @package templatepackager
 * @subpackage controllers
 */
$modx->regClientStartupScript($tp->config['jsUrl'].'templates.grid.js');
$modx->regClientStartupScript($tp->config['jsUrl'].'chunks.grid.js');
$modx->regClientStartupScript($tp->config['jsUrl'].'snippets.grid.js');
$modx->regClientStartupScript($tp->config['jsUrl'].'packages.grid.js');
$modx->regClientStartupScript($tp->config['jsUrl'].'home.panel.js');
$modx->regClientStartupScript($tp->config['jsUrl'].'home.js');
$output = '<div id="tp-panel-home-div"></div>';

return $output;
