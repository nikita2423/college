/**
 * University.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      uni_name:{
          type: 'string',
          required: true
      },

      uni_type:{
          type: 'string',
          required: true
      },

      rank:{
          type: 'integer',
          required: true
      },

      year:{
          type: 'integer',
          required: true
      },

      courses: {
          collection: 'course',
          via: 'owner'
      }

  }
};

