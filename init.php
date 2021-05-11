<?php
class ToggleToggle extends Plugin {

	private $host;

	function about() {
		return array(1.0,
			"Toggle view and sort modes",
			"Unending",
			false,
			"https://github.com/Unending/ToggleToggle");
	}

	function init($host) {
		$this->host = $host;
		$host->add_hook($host::HOOK_HOTKEY_INFO, $this);
		$host->add_hook($host::HOOK_HOTKEY_MAP, $this);
	}

	function hook_hotkey_info($hotkeys) {

		$hotkeys[__("ToggleToggle's Hotkeys")] = array(
			"toggle_view" => __("Toggle View Mode: Adaptive, Starred"),
			"toggle_sort" => __("Toggle Sort Order: Newest first, Oldest first")
		);
		return $hotkeys;
	}

	function hook_hotkey_map($hotkeys) {
		$hotkeys["`"] = "toggle_view";
		$hotkeys["z"] = "toggle_sort";

		return $hotkeys;
	}

	function get_js() {
		return file_get_contents(__DIR__ . "/init.js");
	}

	function api_version() {
		return 2;
	}

}
