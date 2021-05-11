require(['dojo/_base/kernel', 'dojo/ready', 'fox/Feeds'], function (dojo, ready) {
	ready(function () {
		PluginHost.register(PluginHost.HOOK_INIT_COMPLETE, () => {
			App.hotkey_actions["toggle_view"] = toggleView
			App.hotkey_actions["toggle_sort"] = toggleSort
		});
	});
});

function toggleView() {
	const toolbar = document.forms["toolbar-main"];
	const view_mode = dijit.getEnclosingWidget(toolbar.view_mode);

	let value = view_mode.attr('value');

  // let view_list = ["adaptive", "all_articles", "marked", "published", "unread", "has_note"];
  let view_modes = ["adaptive", "marked"];
  let index = view_modes.indexOf(value);
  index = ++index % view_modes.length;
  value = view_modes[index];

  console.log("view_mode: " + value)
	view_mode.attr('value', value);
	Feeds.reloadCurrent();
}

function toggleSort() {
  const toolbar = document.forms["toolbar-main"];
  const order_by = dijit.getEnclosingWidget(toolbar.order_by);

  let value = order_by.attr('value');

  // let sort_order_modes = ["default", "feed_dates", "date_reverse", "title"];
  let sort_order_modes = ["feed_dates", "date_reverse"];
  let index = sort_order_modes.indexOf(value);
  index = ++index % sort_order_modes.length;
  value = sort_order_modes[index];

  console.log("sort_order_mode: " + value)
  order_by.attr('value', value);
  Feeds.reloadCurrent();
}
