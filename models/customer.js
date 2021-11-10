const mongoose = require('mongoose'); 
 const customerSchema= mongoose.Schema({ 
     name:{
         firstname:{
             type:String, 
             required:true
             },
          lastname:{
              type:String, 
              required:true
              }
         },
    
     emailid:{
          type:String, 
          require:true
        },
        location:{
             nameoflocation:{
                  type:String,
                  required:true
                },
              zipcode:{
                  type:String,
                  required:true
              }, 
             cityname:{
                  type:String,
                  required:true
              },
             statename:{
                 type:String,
                 required:true
             }
            } 
        });

 module.exports=mongoose.model('customers',customerSchema);