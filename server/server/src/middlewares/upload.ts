import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('public','imagens'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage,
  fileFilter: (req, file, cb)=>{
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/jpg' || file.mimetype=='image/png'){
      cb(null, true) 
    }
    else{
      cb(null,false);
      return cb(new Error('Apenas permitido imagens jpeg, jpg, png'))
    }
    
  }

  })

  export default upload;