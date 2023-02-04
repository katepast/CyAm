const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.de/-/en/ref=nav_logo',
    "PageLoadTimeout" : 80000,
    "responseTimeout" : 60000,
  },
  
})
