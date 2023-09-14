import express from 'express'
import mongoose from 'mongoose'
import User from '../model/user'
import successMessage from '../successMessage'
import errorMessage from '../errorMessage'

class userController{
    static async userCreate(req,res){
        const{firstName,lastName,email,password}=req.body
try{
if(req.body.password !== req.body.confirmPassword){
    return errorMessage(res,201,`password and confirmPassword not match`)
}
        const user = await User.create({firstName,lastName,email,password})
        return successMessage(res,200,`user created`,user)
      
    }
    catch(error){
        return errorMessage(res,201,`weee`)
    }
}
static async getAllUser(req,res){
    const user = await User.find();
    if(!user){
        return errorMessage(res,201,`no user found`)
    }
    else{
        return successMessage(res,200,`all user ${user.length} found`,user)
    }
}
static async deleteAllUser(req,res){
    const user = await User.deleteMany();
return errorMessage(res,201,`all user deleted`)
}
static async deleteOneUser(req,res){
    const id = req.params.id
    const user = await User.deleteOne({id:id})
    if(!user){
        return errorMessage(res,201,`user not found deleted`)
    }else{
        return errorMessage(res,201,`user deleted`)
    }
 
}

}
export default userController