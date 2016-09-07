"use strict"
/**
 * Provides a way of storing private properties in objects
 * @module private-properties
 */


/**
 * createPrivateKey - creates a new  private key
 *
 * @param  {String} [desc="private"] the description for the private key
 * @return {Function}                a function given the correct context
 * returns a object for private properties.
 */
module.exports = function createPrivateKey(desc="private") {
  let privateKey = Symbol(desc);


  /**
   * getPrivate - returns a object that is completely private
   *
   * @param  {Object} [context=this] the context can either be provieded
   * everytime or bound to the context
   * @return {Object}         a object for storing private properties
   */
  return function getPrivate(context) {
    context = context || this;
    context[privateKey] = context[privateKey] || {};

    return context[privateKey];
  };
}
