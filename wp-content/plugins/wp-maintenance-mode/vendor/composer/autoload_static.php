<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6bd2cc6891bccaf5247e4e390ab00085
{
    public static $files = array (
        '7c3f92ec501ce72fe4f09265dc506991' => __DIR__ . '/..' . '/codeinwp/themeisle-sdk/load.php',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit6bd2cc6891bccaf5247e4e390ab00085::$classMap;

        }, null, ClassLoader::class);
    }
}
