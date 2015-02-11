var each = require("lodash/collection/each");

var __tacos = {};

module.exports = {
  createTaco: function(title) {
    var id = (+new Date + ~~(Math.random() * 999999)).toString(36);
    __tacos[id] = {
      id    : id,
      title : title,
      count : 0
    };
    return __tacos[id];
  },

  updateTaco : function(id, key, value) {
    __tacos[id][key] = value;
    return __tacos[id];
  },

  getAll : function() {
    return __tacos;
  },

  deleteTaco : function(id) {
    delete __tacos[id];
    return __tacos;
  },

  incTaco : function(id) {
    __tacos[id].count = __tacos[id].count + 1;
    return __tacos[id];
  },

  decTaco : function(id) {
    var newCount = __tacos[id].count - 1;
    if (newCount) __tacos[id].count = newCount;
    return __tacos[id];
  },

  resetCounts : function() {
    each(__tacos, function(d,i) { __tacos[i].count = 0; });
    return __tacos;
  },

  resetCount : function(id) {
    __tacos[id].count = 0;
    return __tacos[id];
  },

  resetTacos : function() {
    __tacos = {};
    return __tacos;
  }
};
