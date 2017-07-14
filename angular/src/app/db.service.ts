
export class DbService {

  stList:any[]=[{id:'1',name:"Assad Saad",email:"assad@mum.edu"},{id:'2',name:"Kalieb Hailu",email:"k@mum.edu"}];
getData(){
    return this.stList;
  }
  getDataById(id:number):{}{
for(let s of this.stList){
  if(s.id==id) return s;
}
  }
}
