//import { axios } from 'axios';

class FaqService{
    async getFAQ(){
        // let response = await axios.get("http://127.0.0.1:5000/api/faq");
        // return response.data
    }
    getFaqLocal(){
        let faqData = [
            {
                "id": "1",
                "question": "What Should I wear?",
                "answer": "Simply put, you should wear a t-shirt (long sleeve preferrably) and pants. You should also wear closed toed shoes you can comfortably stand, walk and run in. If you think it's cool to gunfight in shorts and flip flops, not only are you wrong, but you're dumb.",
            },
            {
                "id": "2",
                "question": "What should I bring?",
                "answer": "We require a minimum of 200 rounds for the weapon you plan on training with, unless otherwise specified. We also require a gallon of water per shooter, we don't want you to become a heat casualty on the range with us. For safety purposes, you need to have ear protection and eye protection of your choice. We recommend that you bring a light lunch, and for our fair skinned friends we recommend sunscreen.",
            },
            {
                "id": "3",
                "question": "Tactical gear?",
                "answer": "The short answer, if you have a kit, bring it. Train how you fight. The idea behind our combat classes is to give you the skillset to venture out into a collapsed society and defend yourself with the things you actually have. If you don't have body armor, a helmet, a belt, and all the other cool accessories, that's ok. Everyone starts somewhere, and you can carry extra mags in your pant pockets. If you're interested in purchasing gear but aren't sure where to start, feel free to pick our brains about it in person at a class. We designate a block of time for our instructors to give each class a detailed breakdown of their weapon and kit setup, and they will relate their professional experiences as to why they have their equipment setup that way.",
            },
        ];
        return faqData;
    }
}

export default FaqService;