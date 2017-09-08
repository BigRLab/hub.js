import $hub from './hub';

const handler = ( data ) => {
    console.log( 'handler', data );
}

// 监听 test 事件流
const listener = $hub.listen('test', handler);

// 设置 store 值
$hub.store.code = 1;

// 监听 store 里具体 某个数值
// 若 这个数值已存在 “当前值”，则监听成功后，立即返回 “当前值”，就像 Rx.BehaviorSubject
$hub.listen('@store/code', ( code ) => {
    console.log( 'store code', code );
})

const timer = setInterval(() => {
    // $hub.emit('@store/code', 1);
    ++$hub.store.code;

    // 触发 test 事件流
    $hub.emit('test', { code: 1 });

    if ( $hub.store.code === 5 ) {
        clearInterval( timer );

        // 移除监听 test 事件流
        // $hub.removeListen('test', handler);
        listener.remove();
    }
}, 1000);

// 绑定 DOM 事件流
const dispatcher = $hub.DOM('button', 'click').emit('dom-click-event');

// 监听对应的 DOM 事件流
$hub.listen('dom-click-event', ( e ) => {
    console.log( 'button click', e );
    // 移除 DOM 监听事件，停止 发送事件流
    dispatcher.remove();
})


// 绑定 fetch 事件流
const fetchDispatcher = $hub.fetch('https://legox.org/mock/8f495a90-8659-11e7-a2a8-b9241e7b71e4').emit('fetch-event');

setTimeout(() => {
    // 刷新 fetch 事件流
    fetchDispatcher.reload();
}, 2000);

// 监听对应的 fetch 事件流
$hub.listen('fetch-event', ( result ) => {
    console.log( 'fetch', result );
})
