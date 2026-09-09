import { v2 as cloudinary } from 'cloudinary'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (file:Blob) : Promise<string | null>=>{
if(!file){
    return null
}

const saveLocally = async () => {
    const uploadsDirectory = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadsDirectory, { recursive: true })
    const extension = file.type.split('/')[1] || 'bin'
    const fileName = `${randomUUID()}.${extension}`
    await writeFile(path.join(uploadsDirectory, fileName), Buffer.from(await file.arrayBuffer()))
    return `/uploads/${fileName}`
}

try {
    if (process.env.NODE_ENV !== 'production') {
        return await saveLocally()
    }
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const uploadedUrl = await new Promise<string | null>((resolve,reject)=>{
        const uploadStream = cloudinary.uploader.upload_stream({resource_type:"auto"},(error,result)=>{
            if(error){
                reject(new Error(error.message || JSON.stringify(error)))
            }else{
                resolve(result?.secure_url ?? null)
            }
        })
        uploadStream.end(buffer)
    })
    return uploadedUrl
} catch (error) {
    console.error("Cloudinary upload failed, using local upload:", error)
    return await saveLocally()
}

}

export default uploadOnCloudinary