import withMarkdoc from '@markdoc/next.js'

import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // ...
  },
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  images: {
    domains: ['cdn.prod.website-files.com'],


  }
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
