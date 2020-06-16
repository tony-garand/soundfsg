<?php
/**
 * Automin2 module for Craft CMS 3.x
 *
 * Automin plugin converted for Craft3
 *
  * @copyright Copyright (c) 2018 N/A
 */

namespace modules\automin2module\twigextensions;

use modules\automin2module\Automin2Module;

use Craft;

/**
 * @author    N/A
 * @package   Automin2Module
 * @since     1
 */
class Automin2ModuleTwigExtension extends \Twig_Extension
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getName()
    {
        return 'automin';
    }

    /**
     * @inheritdoc
     */
    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('automin', [$this, 'autominFilter'], ['is_safe' => ['html']]),
        ];
    }

    /**
     * The automin filter compiles, combines and minifies javascript, css and less.
     */

    public function autominFilter($content, $type, $attr='')
    {
        return Automin2Module::getInstance()->automin2ModuleService->process($content, $type, $attr);
    }
}
