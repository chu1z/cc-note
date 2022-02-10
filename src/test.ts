export const testData = [
  {
    id: 1,
    tag: '编程',
    content: `
    **设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。**

### 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![288fea46f12d28232dc6592566334d19.png](resources/ebd4c74ca7a64bf18a507f2606aa95cd.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。
    `,
    time: 1644322624
  }, {
    id: 2,
    tag: '编程',
    content: `它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

    - flex-start：交叉轴的起点对齐。
      
    - flex-end：交叉轴的终点对齐。
      
    - center：交叉轴的中点对齐。 元素位于容器的中心。
      
        弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
        
    - baseline: 项目的第一行文字的基线对齐。
      
    - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。`,
    time: 1644322624
  }, {
    id: 3,
    tag: '编程',
    content:
      `Promise.prototype.then()

      then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
      
      p.then(onFulfilled[, onRejected]);
      
      p.then(
      
      value =>
      
      {
      
      // fulfillment
      
      },
      
      reason =>
      
      {
      
      // rejection }
      
      );
      
      参数
      
      onFulfilled 可选
      
      当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数
      
      onRejected 可选
      
      当 Promise 变成拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。  如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。
      
      返回值
      
      当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：
      
      返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
      
      没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
      
      抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
      
      返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
      
      返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
      
      返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。
      
      catch() 方法返回一个Promise (en-US)，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。 (事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected)).
      
      finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。
      
      如果你想在 promise 执行完毕后无论其结果怎样都做一些处理或清理时，finally() 方法可能是有用的。
      
      finally() 虽然与 .then(onFinally, onFinally) 类似，它们不同的是：
      
      调用内联函数时，不需要多次声明该函数或为该函数创建一个变量保存它。
      
      由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
      
      与Promise.resolve(2).then(() => {}, () => {}) （resolved的结果为undefined）不同，Promise.resolve(2).finally(() => {}) resolved的结果为 2。
      
      同样，Promise.reject(3).then(() => {}, () => {}) (fulfilled的结果为undefined), Promise.reject(3).finally(() => {}) rejected 的结果为 3。
      
      注意: 在finally回调中 throw（或返回被拒绝的promise）将以 throw() 指定的原因拒绝新的promise.
      
      (finally 中使用 throw 抛出异常 会使状态变为 rejected 其他操作都是 上面如何就如何）`,
    time: 1644322624
  }, {
    id: 4,
    tag: '编程',
    content: '### 111 \n **AAA** \n **AAA** \n **AAA**',
    time: 1644322624
  }

]
