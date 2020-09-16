# ULTIMATE-JS Reference

## Keep in mind

![conversion](/img/conversion.png)
![conversion](/img/talk.png)
![conversion](/img/jre.png)
![conversion](/img/context.png)

1. JS isn't only an interpreted language. Depends on implementation - combination of both.
2. V8 implements JIT compiler.
3. Performance optimised using hidden classes and inline caching.
4. 1. Memory heap: where memory allocation happens. \*Memory leak
   2. Call stack: where the engine keeps track of code in its execution. \*Stack overflow
5. Memory leak : too many global variables, event listeners, setInterval,infinite push.
6. Stack overflow : infinite recursion
7. JS is a garbage collected language:automatically frees up memory we no longer need - tries to prevent memory leak (ideally)- using mark & sweep algorithm.
8. JS runtime : JS engine + Web API (DOM,fetch(),setTimeout() etc.) + Event Loop & callback queue.
9. JS is single threaded: one execution at a time. Only a single call stack.
10. When code in run, a global execution context is created.This global execution context gives : a **global object**(for browser it's window, for node it's global) & **this** keyword.When a function is run its own execution context is created.
11. In JS, **lexical scope** (available data + variables where the function was defined) determines our available variables. Not where the function is called (**dynamic scope**). The first lexical environment is the global lexical environment(where we write our code).
12. **var**s are partially hoisted. We hoist the **var** but not the right value. (it's assigned with undefined). **function**s are fully hoisted. They're allocated space in memory. **const & let do not get hoisted!**
13. Better to **stay away** from these:
    1. eval()
    2. arguments
    3. for in - instead use Object.keys() and iterate over.
    4. with
    5. delete
