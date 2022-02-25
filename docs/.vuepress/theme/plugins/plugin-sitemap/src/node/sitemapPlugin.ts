import type { Plugin, PluginObject } from '@vuepress/core'
import { logger } from '@vuepress/utils'
import { generateSiteMap } from './generateSitemap'
import type { SitemapOptions } from './types'

export const sitemapPlugin: Plugin<SitemapOptions> = (options, app) => {
  const plugin: PluginObject = {
    name: '@vuepress/plugin-sitemap',
  }

  if (!options.hostname) {
    logger.warn(`[${plugin.name}] 'hostname' is required`)

    return plugin
  }

  return {
    ...plugin,

    async onGenerated(): Promise<void> {
      await generateSiteMap(options as SitemapOptions, app)
    },
  }
}
