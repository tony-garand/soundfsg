<?php
/**
 * Automin2 module for Craft CMS 3.x
 *
 * Automin plugin converted for Craft3
 *
  * @copyright Copyright (c) 2018 N/A
 */

namespace modules\automin2module;

use modules\automin2module\assetbundles\automin2module\Automin2ModuleAsset;
use modules\automin2module\services\Automin2ModuleService as Automin2ModuleServiceService;
use modules\automin2module\twigextensions\Automin2ModuleTwigExtension;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\TemplateEvent;
use craft\i18n\PhpMessageSource;
use craft\web\View;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

/**
 * Class Automin2Module
 *
 * @author    N/A
 * @package   Automin2Module
 * @since     1
 *
 * @property  Automin2ModuleServiceService $automin2ModuleService
 */
class Automin2Module extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * @var Automin2Module
     */
    public static $instance;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/automin2module', $this->getBasePath());
        $this->controllerNamespace = 'modules\automin2module\controllers';

        // Translation category
        $i18n = Craft::$app->getI18n();
        /** @noinspection UnSafeIsSetOverArrayInspection */
        if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id.'*'])) {
            $i18n->translations[$id] = [
                'class' => PhpMessageSource::class,
                'sourceLanguage' => 'en-US',
                'basePath' => '@modules/automin2module/translations',
                'forceTranslation' => true,
                'allowOverrides' => true,
            ];
        }

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$instance = $this;

        if (Craft::$app->getRequest()->getIsCpRequest()) {
            Event::on(
                View::class,
                View::EVENT_BEFORE_RENDER_TEMPLATE,
                function (TemplateEvent $event) {
                    try {
                        Craft::$app->getView()->registerAssetBundle(Automin2ModuleAsset::class);
                    } catch (InvalidConfigException $e) {
                        Craft::error(
                            'Error registering AssetBundle - '.$e->getMessage(),
                            __METHOD__
                        );
                    }
                }
            );
        }

        Craft::$app->view->registerTwigExtension(new Automin2ModuleTwigExtension());

        Craft::info(
            Craft::t(
                'automin2-module',
                '{name} module loaded',
                ['name' => 'Automin2']
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
}
