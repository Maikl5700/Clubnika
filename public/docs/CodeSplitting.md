### Introduction

As your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

We are using `React.lazy` function to dynamically import component.

##### Regular lodaded component

```javascript
const routesConfig = [
  {
    path: '/auth/sign-up',
    exact: true,
    component: SignUp
  }
];
```

##### Lazy lodaded component

```javascript
const routesConfig = [
  {
    path: '/auth/sign-up',
    exact: true,
    component: lazy(() => import('views/SignUp'))
  }
];
```
