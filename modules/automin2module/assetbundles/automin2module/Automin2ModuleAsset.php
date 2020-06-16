<?php
/**
 * Automin2 module for Craft CMS 3.x
 *
 * Automin plugin converted for Craft3
 *
  * @copyright Copyright (c) 2018 N/A
 */

namespace modules\automin2module\assetbundles\Automin2Module;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    N/A
 * @package   Automin2Module
 * @since     1
 */
class Automin2ModuleAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@modules/automin2module/assetbundles/automin2module/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/Automin2Module.js',
        ];

        $this->css = [
            'css/Automin2Module.css',
        ];

        parent::init();
    }
}
