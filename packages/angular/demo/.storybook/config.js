import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Carbon Charts - Angular Wrappers',
  showDownPanel: false
  // goFullScreen: false,
  // showLeftPanel: true,
//   showSearchBox: false,
  // downPanelInRight: true,
});

// load global styles
require("!style-loader!css-loader!sass-loader!./previews.scss");

const req = require.context("../src/stories/", true, /.stories.ts$/);
function loadStories() {

	req.keys().forEach(filename => {
		req(filename);
	});
}

configure(loadStories, module);
