import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://chaseroll/icon.svg',
    brandTitle: 'Chase Roll Components',
    brandUrl: 'https://chaseroll.com',
  },
});
