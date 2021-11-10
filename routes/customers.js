const express= require('express'); 
const customer = require('../models/customer');
const router= express.Router();
 const Post= require('../models/customer'); 
 // getting all posts 
 router.get('/', async(req,res) =>{  try{ const customer = await Post.find(); res.json(customer);
}catch (err){ res.json({message:err}); } });

  // getting a post by id

  router.get('/:postid', async(req,res) =>{try{ const customer = await Post.findById(req.params.postid); res.json(customer); }catch(err){ res.json({message:err}); } })

   // creating a post

 router.post('/',(req,res)=>{ const customer =new Post({ name:{firstname:req.body.name.firstname,
    lastname:req.body.name.lastname},
    emailid:req.body.emailid,
    location:{nameoflocation:req.body.location.nameoflocation,
             zipcode:req.body.location.zipcode,
            cityname:req.body.location.cityname,
            statename:req.body.location.statename}

 });
  customer.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // deleting a post

 router.delete('/:postid', async(req,res) =>{ try{ const removecustomer = await Post.deleteOne({_id: req.params.postid}); res.json(removecustomer); }catch(err){ res.json({message:err}); } } ); 

 // updating a post by id

 router.patch('/:postid', async(req,res) =>{ try{ const editcustomer = await Post.findOne({_id: req.params.postid}); 
 if(req.body.name){
   editcustomer.name=req.body.name;
 }
 
if(req.body.emailid){
  editcustomer.emailid=req.body.emailid;
}
if(req.body.location){
  editcustomer.location=req.body.location;
}

await editcustomer.save();
 res.json(editcustomer); }
 catch(err){ res.json({message:err}); } });

 module.exports= router;