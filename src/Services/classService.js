// import axios from "axios";

class ClassService{
    async getClasses(){
        // let response = await axios.get("http://127.0.0.1:5000/api/classes");
        // return response.data;
   }
   getClassesLocal(){
    let classData = [
        {
            "id": "1",
            "title": "Rifle Fundamentals",
            "image": "riflefunds.jpg",
            "desc": "A deep dive on safety principles, shooting fundamentals, and weapons maintenance. This class is designed to educate the new gun owner with the essential knowledge that creates a safe and compotent gun owner. This class was designed around the ar15 platform, but applies to any semi-automatic or bolt action rifle.",
        },
        {
            "id": "2",
            "title": "Combat Rifle Course",
            "image": "bcrc.jpg",
            "desc": "The Combat Rifle Course is broken up into basic and intermediate shooting packages. Shooters can expect to learn the fundementals of shooting, moving and communicating at the individual and buddy team level. Shooters are allowed to bring any modern rifle they are eager to train with, whether it be ar15, ak47, or anything in between.",
        },
    ];
    return classData;
   }
}

export default ClassService;
