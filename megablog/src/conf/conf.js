 const conf={
    appwriteUrl: String(process.env.REACT_APP_NOT_SECRET_CODE),
    appwritePROJECT_ID: String(process.env.REACT_APP_PROJECT_ID),
    appwriteDATABASE_ID:String(process.env.REACT_APP_DATABASE_ID),
    appwriteCOLLECTION_ID:String(process.env.REACT_APP_COLLECTION_ID),
    appwriteBUCKET_ID:String(process.env.REACT_APP_BUCKET_ID),
}

export default conf;