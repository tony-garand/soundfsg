<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app/main.php and [web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 */
return [
    'modules' => [
        'automin2-module' => [
            'class' => \modules\automin2module\Automin2Module::class,
            'components' => [
                'automin2ModuleService' => [
                    'class' => 'modules\automin2module\services\Automin2ModuleService',
                ],
                'automin2ModuleCacheService' => [
                    'class' => 'modules\automin2module\services\Automin2ModuleCacheService',
                ],
            ],
        ],
    ],
    'bootstrap' => ['automin2-module'],
];
