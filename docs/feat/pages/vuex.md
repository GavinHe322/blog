# Vuex 实战
**使用 ```Vuex``` 并不意味着你需要将全部状态存入 ```state```, 虽然这更方便, 但是这会使 ```Vuex``` 的代码冗长.**

## 入门
```js
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')

console.log(store.state.count) // -> 1
```

## 概念

## state

 - **mapStat 辅助函数**

 - 当我们在页面访问多个 ```state``` 时，Vuex 提供了 ```mapState``` 辅助函数来帮助我们减少冗余代码。

```js
// 在单独构建的版本中辅助函数为 Vuex.mapState
// Vue 会将 state 混入 Vue 的响应式，所以在页面中动态访问时，可以配合 computed 使用。
import { mapState } from 'vuex'

export default {
  computed: {
    // 使用对象展开符
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  }
}
```

## getters
 - **mapGetters 辅助函数**
```js
const store = Vue.Store({
  state: {
    todos: [
      {
        name: 'jery',
        done: true
      },
      {
        id: 2,
        name: 'lucy',
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done) //[{name: 'jery'}]
    }
  }
})

// 页面中使用
import { mapGetters } from 'vuex'

export default {
  computed: {
    // 把 `this.doneTodos` 映射为 `this.$store.getters.doneTodos`
    ...mapGetters([
      'doneTodos',
    ]),
    // 通过 getters 访问
    doneTodos2: {
      get() {
        return this.$store.getters.doneTodos
      }
    }
  }
}

```

## Mutation
 - **更改 ```state``` 的唯一方法是使用 ```mutation```**
 - **mapMutations 辅助函数**
 - **Mutation 必须是同步函数**
```js
const store = Vuex.Store({
  state: {
    count: 1
  },
  mutation: {
    setCount(state, count) {
      state.count = count
    }
  }
})

// 页面
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'setCount'
    ])
  }
}
// 普通形式
this.$store.commit('setCount', 10)

// 以对象形式分发
this.$store.commit({
  type: 'setCount', 
  count: 10
})

this.$store.state.count // 10
```

## Action
**区别于 ```mutation```**
- ```Action``` 提交的是 ```mutation```, 而不是直接修改状态
- ```Action``` 可以执行异步操作.
- ```mapActions``` 辅助函数
```js
const store = Vuex.Store({
  state: {
    count: 1
  },
  mutation: {
    setCount(state, count) {
      state.count = count
    }
  },
  actions: {
    // 接受一个与 store 具有相同方法的 context 对象, 因此可以使用 context.commit
    setCount(context, count) {
      context.commit('setCount', count) // sote.count = 10
    },
    // 既然是对象, 那就可以使用 { commit }, 来直接拿取 commit
    setCount2({ commit }, count) {
      commit('setCount', count) // store.count = 10
    }
  }
})

// 页面
// mapActions 使用
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'setCount', // 将 `this.setCount()` 映射为 `this.$store.dispatch('setCount')`
    ])
  }
}

// 普通调用
this.$store.dispath('setCount', 10)

// 以对象形式分发
this.$store.dispath({
  type: 'setCount',
  count: 10
})

```

### 配合 ```async/await``` 使用

```js
const store = Vuex.Store({
  actions: {
    async actionA ({ commit }) {
      commit('gotData', await getData())
    },
    async actionB ({ dispatch, commit }) {
      await dispatch('actionA') // 等待 actionA 完成
      commit('gotOtherData', await getOtherData())
    }
  }
})
```
## module
 - 为了解决实际问题， ```Vuex``` 允许我们将不用的功能拆分成不同的模块.

 - 每个模块都拥有自己的 ```state```、```mutations```、```actions```、```getters```
```js
const user = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const cart = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    user: user,
    cart: cart
  }
})

store.state.user // -> user 的状态
store.state.cart // -> cart 的状态
```