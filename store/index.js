import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      comments: [
        { id: 1, content: 'hogehoge', created: '2019-03-31 15:30' },
        { id: 2, content: 'fugafuga', created: '2019-03-31 16:00' },
      ],
    }),
    mutations: {
      insert: (state, obj) => {
        const d = new Date()
        const fmt =
          d.getFullYear() +
          '-' +
          ('00' + (d.getMonth() + 1)).slice(-2) +
          '-' +
          ('00' + d.getDate()).slice(-2) +
          ' ' +
          ('00' + d.getHours()).slice(-2) +
          ':' +
          ('00' + d.getMinutes()).slice(-2)
        state.comments.unshift({
          id: 3,
          content: obj.content,
          created: fmt,
        })
      },
      remove: (state, obj) => {
        for (let i = 0; i < state.comments.length; i++) {
          const ob = state.comments[i]
          if (ob.content === obj.content && ob.created === obj.created) {
            alert('remove ' + '"' + ob.content + '"')
            state.comments.splice(i, 1)
            return
          }
        }
      },
    },
  })
}

export default createStore
