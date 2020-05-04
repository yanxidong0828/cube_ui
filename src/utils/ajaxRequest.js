import axios from "axios";
class ajaxRequest {
  constructor(){
    this.baseUrl = process.env.NODE_ENV
  }
  request(options){
    let instance = axios.create();
    let config = {}
  }
}
