const APIController=(function(){
  const clientId='';
  const clientSecret='';
  const _getToken= async ()=>{
    const result=await fetch('http://accounts.spotify.com/api/token',{
      method:'POST',
      headers:{
        'content-type':'',
        'Authorization':'Basic'+ btoa(clientid +':'+clientsecret)
      },
      body:''
    });
    const data=await result.json();
    return data.access_token;
  }
  const search=async(token)=>{
    const result=await fetch('http://api.spotify.com/v1/browse/caterories?locale=sc_us',{
      method:'GET',
      headers:{'Authorization':'Bearer'+token}
    });
    const data=await result.json();
    return data.categories.items;
  }
})