// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'SMK Muhammadiyah Watulimo',
  plugins: [   
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/page/**/*.md',
        typeName: 'Home',
        remark: {
          // remark options
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss"     
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}