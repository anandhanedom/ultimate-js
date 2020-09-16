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
5. Memory leak : global variables, event listeners, setInterval,infinite push.
6. JS is single threaded: one execution at a time. Only a single call stack.
7. When code in run a global execution context is created.This global execution context gives : a **global object**(for browser it's window, for node it's global) & **this** keyword.When a function is run its execution context is created.
8. Better to **stay away** from these:
   1. eval()
   2. arguments
   3. for in - instead use Object.keys() and iterate over.
   4. with
   5. delete
