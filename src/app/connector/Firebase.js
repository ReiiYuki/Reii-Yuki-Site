import FirebaseConfig from '../../assets/json/firebase.json'
import FireBase from 'firebase'
FireBase.initializeApp(FirebaseConfig)

export const queryFromFireBase = (self,ref_name,callback)=>{
  FireBase.database().ref(ref_name).on('value', (data)=>{
    callback(self,data.val())
  })
}
