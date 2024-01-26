
import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService{
          client = new Client();
          account;

          constructor(){
            this.client=Client
                .setEndpoint(conf.appwriteUrl) // Your API Endpoint
                .setProject(conf.appwritePROJECT_ID); // Your project ID
            this.account = new Account(this.client);
          }

          //using async n wait.....because we can not proceed unless n untill our account is created
          //passing parameter required

    async createAccount({email,password,name}){
      try{
        const userAccount= await this.account.create(ID.unique(),name,password,name); //successful creation of account with unique ID
          if(userAccount){
            //call another method to login directly if account already created.
            return this.login({email,password});
                    }
          else{
            return userAccount;
          }
       }
      catch(error){
        throw error;     //failed
      }
    }
    
    //login with email n password if account created already
    async login({email,password}){
        try{
         return await this.account.createEmailSession(email, password);
        }

        catch(error){
          throw error;
        }

      }
    //get cuurent user
    async getCurrentUser(){
      try{
        return await this.account.get();
      }
      catch(error){
        console.log("Appwrite serive :: getCurrentUser :: error", error);
      }
     
    }
    //logout
    async logout(){
      try{
         return await this.account.deleteSession();
      }
      catch(error){
        console.log("Appwrite serive :: logout :: error", error);
      }
    }
    
  }

  //create object
const authservice= new AuthService();
//export object
export default authservice;