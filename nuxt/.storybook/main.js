import path from 'node:path'
import { loadConfigFromFile, mergeConfig } from 'vite'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(baseConfig) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )
    return mergeConfig(baseConfig, userConfig)
  }
}

export default config
