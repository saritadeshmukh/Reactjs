import { Client,ID ,Databases,Storage,Query} from "appwrite";
import conf  from "../conf/conf";

export class databaseService{
    //declaring variables
    client = new Client();
    databases;
    bucket;

    //calling constructor  
        
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwritePROJECT_ID); // Your project ID
        this.databases=  new Databases(this.client);
        this.bucket = new Storage(this.client);
     }

     //create post method
     async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                                                        conf.appwriteDATABASE_ID,
                                                        conf.appwriteCOLLECTION_ID,
                                                        slug,
                                                        //to make storage,keep items in {}
                                                        {title,
                                                         content,
                                                         featuredImage,
                                                         status,
                                                         userId}
                                                     )
        }
        catch(error){
            throw error;
        }
     }

     //update post,we can update by using slug unique ID
     async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDucument(conf.appwriteDATABASE_ID,
                                                       conf.appwriteCOLLECTION_ID,
                                                       slug,
                                                       {
                                                        title,
                                                        content,
                                                        featuredImage,
                                                        status,
                                                       }
                                                    )
        }
        catch(error){throw error}


     }
     //delete
     async deletePost(slug){
        try{
            await this.databases.deleteDocument(conf.appwriteDATABASE_ID,
                                                conf.appwriteCOLLECTION_ID,
                                                slug);
                return true;
        }
        catch(error){
            console.log("Appwrite serive :: deletePost :: error", error);           
        }
     }

     async getPost(slug){
        try{
            return await  this.databases.getDocument(conf.appwriteDATABASE_ID,
                conf.appwriteCOLLECTION_ID,
                slug)
        }
        catch(error){
            throw error
        }
     }
        
     //by using query we can get all list of documents..query suing key value pair in INdex og database
     
     async getPosts(queries=[Query.equal("status","active")]){
       try{
        return await this.databases.listDocuments(conf.appwriteDATABASE_ID,
                                                  conf.appwriteCOLLECTION_ID,
                                                  queries,
                                                 )
        }
       catch(error){
        console.log("Appwrite serive :: getPosts :: error", error);
       }
     }

     //file upload services-https://appwrite.io/docs/products/storage/

     async updateFile(file){
        try{
            return await this.bucket.createFile(conf.appwriteBUCKET_ID,
                                                 ID.unique(),
                                                 file,
                                               )                                          
         }
        catch(error){
            console.log("Appwrite serive :: uploadFile :: error", error);           
            }
     }

     async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBUCKET_ID,
                fileId, )
        }
        catch(error){
            console.log("Appwrite serive :: deleteFile :: error", error);
        }
     }
     getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBUCKET_ID,
                                          fileId,)
     }

}

//create object to get values of databaseService
const service = new databaseService();
//export object
export default service;