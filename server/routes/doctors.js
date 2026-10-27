const express=require('express');
const {find,findOne,count,updateOne}=require('../db');
const router=express.Router();

async function decorate(d){
  const u=await findOne('users',{user_id:d.user_id});
  const patients_treated=await count('appointments',{doctor_id:d.doctor_id});
  return {...d,email:u?.email||null,phone:u?.phone||null,patients_treated};
}

router.get('/',async(req,res)=>{
  try{
    let rows;
    if(req.query.id){
      const d=await findOne('doctors',{doctor_id:Number(req.query.id)});
      if(!d)return res.status(404).json({success:false,message:'Doctor not found.'});
      return res.json({success:true,message:'OK',data:await decorate(d)});
    }
    rows=await find('doctors',req.query.department?{department:req.query.department}:{},{sort:{first_name:1}});
    res.json({success:true,message:'OK',data:await Promise.all(rows.map(decorate))});
  }catch(err){
    console.error(err);
    res.status(500).json({success:false,message:'Database error: '+err.message});
  }
});

// Doctor profile/photo editing. Images are stored as a data URL in MongoDB
// so the uploaded DP remains available after refresh/re-login without an
// additional file-storage service.
router.put('/profile',async(req,res)=>{
  try{
    if(!req.session.user || req.session.user.role!=='DOCTOR'){
      return res.status(401).json({success:false,message:'Doctor login required.'});
    }
    const doctor=await findOne('doctors',{doctor_id:req.session.user.linkedId,user_id:req.session.user.userId});
    if(!doctor)return res.status(404).json({success:false,message:'Doctor profile not found.'});

    const allowed=['profile_photo','first_name','last_name','department','specialization','qualifications','experience_years','consultation_fee','clinic_location','bio'];
    const patch={};
    for(const key of allowed){
      if(Object.prototype.hasOwnProperty.call(req.body,key)) patch[key]=req.body[key];
    }
    if(typeof patch.profile_photo==='string' && patch.profile_photo.length>3*1024*1024){
      return res.status(413).json({success:false,message:'Profile photo is too large. Please choose an image under 2 MB.'});
    }
    await updateOne('doctors',{doctor_id:doctor.doctor_id},{$set:patch});
    const updated=await findOne('doctors',{doctor_id:doctor.doctor_id});
    res.json({success:true,message:'Doctor profile updated.',data:await decorate(updated)});
  }catch(err){
    console.error(err);
    res.status(500).json({success:false,message:'Could not update doctor profile: '+err.message});
  }
});

module.exports=router;
