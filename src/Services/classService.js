import axios from "axios";

class classService{
    async getClasses(){
        let response = await axios.get("http://127.0.0.1:5000/api/classes");
        return response.data;
    }
}

export default classService
