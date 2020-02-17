export const state = () => ({
    list: [],
    id: 5
})



export const mutations = {

    init (state) {

    const data = [
        {id: 1, text: 'First thing to do', content:'Content 1', done: true},
        {id: 2, text: 'Second thing to do', content:'Content 2', done: false},
        {id: 3, text: 'Third thing to do', content:'Content 3', done: true},
        {id: 4, text: 'Fourth thing to do', content:'Content 4', done: false},
    ]
    state.list = data
    },

    add (state, text) {
        let id = state.id
        let content = 'Content ' + id
        state.list.push({
            id,
            text,
            content,
            done: false
        })
        state.id ++
    },
    
    remove (state, todo) {
        state.list.splice(state.list.indexOf(todo), 1)
    },

    toggle (state, todo) {
        todo.done = !todo.done
    }
}