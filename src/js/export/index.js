/**
 * @file: hub
 * @author: lijialiang
 * @team: UED中心
 * @export: umd
 * @export name: $hub
 * @export file: hub
 */

/*
 * emit event
 */
import emit from './event/emit.js';

/*
 * listen event
 */
import listen from './event/listen.js';

module.exports = {

    /*
     * save the listening observer
     */
    observer: { },

    /*
     * emit to the observer
     */
    emit,

    /*
     * register to be an observer
     */
    listen,
}
