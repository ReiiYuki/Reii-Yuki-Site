import MLAB from '../../assets/json/mlab.json'

export const readDB = (collection,callback,self)=>{
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/reiiyuki/collections/"+collection+'?apiKey='+MLAB.API_KEY,
    type: "GET",
    contentType: "application/json"
  }).done(function( data ) {
    callback(self,data)
  })
}
