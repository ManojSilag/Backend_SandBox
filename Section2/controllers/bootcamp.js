// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps
// @acess    Public
exports.getBootcamps = ( req, res, next ) =>{
    res
    .status(200)
    .json({success:true, msg: 'Show all bootcamps'})
}

// @desc     Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @acess    Public
exports.getBootcamp = ( req,res, next ) =>{
    res
    .status(200)
    .json({success:true, msg: `Show  bootcamp ${req.params.id}`})
}

// @desc     Create new bootcamps
// @route    POST /api/v1/bootcamps
// @acess    Private
exports.createBootcamp = ( req,res, next ) =>{
    res
    .status(200)
    .json({success:true, msg: 'create  bootcamps'})
}

// @desc     Update bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @acess    Private
exports.updatetBootcamp = ( req,res, next ) =>{
    res
    .status(200)
    .json({success:true, msg: `update bootcamp ${req.params.id}`})
}

// @desc     DELETE bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @acess    Private
exports.deleteBootcamp = ( req,res, next ) =>{
    res.status(200).json({success:true, msg: `delete bootcamp ${req.params.id}`})
}