

async function ImagetoBase64(file){
    const reader=new FileReader()
    reader.readAsDataURL(file)

    const data=new Promise((res,rej)=>{
        reader.onload=()=>res(reader.result)
        reader.onerror=(err)=>rej(err)
    })

    return data
}

export default ImagetoBase64