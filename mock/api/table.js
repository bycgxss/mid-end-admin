const posts = [
  {
    id: 0,
    createDate: '2022-09-08T14:21:34.339Z',
    updateDate: '2022-09-08T14:21:34.339Z',
  },
]
export default [
  {
    url: '/api/table/posts',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: posts,
      }
    },
  },
]
