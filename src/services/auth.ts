import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  email: string;
  password: string; 
}

          const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

          export async function signInRequest(data : SignInRequestData){
          await delay()

      return {
      token: uuid(),
      user: {
        name:'William',
        email:'william@william.com.br',
        avatar_url:'https://github.com/williamjayjay.png'

    }
    }
    }

    export async function recoverUserInformation(){
      await delay()

      return{
        user: {
          name:'William',
          email:'william@william.com.br',
          avatar_url:'https://github.com/williamjayjay.png'
  
      }
      }
    }