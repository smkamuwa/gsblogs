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
        path: 'contents/moment/**/*.md',
        typeName: 'Moment',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/latest/**/*.md',
        typeName: 'Latest',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/studi/**/*.md',
        typeName: 'Studi',
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