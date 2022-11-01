const {check,validationResult}=require('express-validator')

const userRegisterValidation=()=>[
    check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('name cannot be empty')
    .bail()
    .isLength({min:3})
    .withMessage('Minimum 3 characters required')
    .bail()

]
const reporter=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error:'validation error'
        })
    }
    next()
}

module.exports={
    name:[userRegisterValidation(),reporter]
}