/**
 * UniversityController
 *
 * @description :: Server-side logic for managing universities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    'index': function (req, res, next){
      var value = req.param('search');
      //res.json([]);
      //var value1 = course.req.allParams();
         University.findOne({uni_name: value}).populate("courses")
           .exec(function(err,course){

             if(err) return res.send(err,404);

           if(typeof(course)=='undefined')
           {
             Course.findOne({course_name: value}).populate("owner")
               .exec(function(err,course){
                 if(err) return res.send(err,505);
                 res.json(course);
               });
           }
           else
             res.json(course);
         });

    },

    /*'destroy':function(req,res,next){
      University.destroy({}).exec(function (err){
        if(err){
          return res.negotiate(err);
        }
        sails.log('deleted');
        return res.ok();
      })
    }*/
};

