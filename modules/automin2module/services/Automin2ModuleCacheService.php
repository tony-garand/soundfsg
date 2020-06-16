<?php
/**
 * Automin2 module for Craft CMS 3.x
 *
 * Automin plugin converted for Craft3
 *
  * @copyright Copyright (c) 2018 N/A
 */

namespace modules\automin2module\services;

use modules\automin2module\Automin2Module;

use Craft;
use craft\base\Component;

/**
 * @author    N/A
 * @package   Automin2Module
 * @since     1
 */
class Automin2ModuleCacheService extends Component
{
    public $caching = false;

    /**
     * Returns the filename of the cache file for the provided
     * cache value, if it exists and is readable.
     * @param string $cache_value
     * @param integer $timestamp
     * @author Jesse Bunch
     */
    public function fetch_cache($cache_key, $cache_value, $timestamp) {

        // Is caching disabled?
        if (!$this->caching) {
            return FALSE;
        }

        $cache_file_path = $this->get_cache_file_path($cache_key);

        if (!file_exists($cache_file_path)) {
            return FALSE;
        }

        if (!is_readable($cache_file_path)) {
            return FALSE;
        }

        $last_modified = @filemtime($cache_file_path);
        if (!$last_modified
            OR $last_modified < $timestamp) {
            return FALSE;
        }

        return $this->_get_cache_url_path($cache_key);
    }

    /**
     * Writes the provided cache value and returns the filename of
     * the cache file.
     * @param string $cache_key A hash of
     * @return mixed FALSE if failure, string if success
     * @author Jesse Bunch
     */
    public function write_cache($cache_key, $cache_value) {
        $cache_file_path = $this->get_cache_file_path($cache_key);

        if (FALSE === file_put_contents($cache_file_path, $cache_value)) {
            return FALSE;
        }

        return $this->_get_cache_url_path($cache_key);
    }

    /**
     * Retruns the cache key for the given cache value
     * @param string $cache_value
     * @param string $extension
     * @return string
     * @author Jesse Bunch
     */
    public function get_cache_key($cache_value, $extension) {
        return md5($cache_value).".$extension";
    }

    /**
     * Returns the full server path to the cache file, should it exist.
     * Does not check if the file exists.
     * @param string $cache_key
     * @return string
     * @author Jesse Bunch
     */
    private function get_cache_file_path($cache_key) {
        $cache_path = Automin2Module::getInstance()->automin2ModuleService->getSetting('autominCachePath');
        return $this->remove_double_slashes("$cache_path/$cache_key");
    }

    /**
     * Returns the URL to the cache file, should it exist
     * @param string $cache_key
     * @return string
     * @author Jesse Bunch
     */
    private function _get_cache_url_path($cache_key) {
        $cache_path = Automin2Module::getInstance()->automin2ModuleService->getSetting('autominCacheURL');
        return $this->remove_double_slashes("$cache_path/$cache_key");
    }

    /**
     * Removes double slashes from string
     * @param string $str
     * @return string
     * @author André Elvan
     */
    private function remove_double_slashes($str) {
        return preg_replace("#([^/:])/+#", "\\1/", $str);
    }
}
