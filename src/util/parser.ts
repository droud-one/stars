import { StarData } from "../types";

const starDataParser = (doc: any): StarData => ({ 
    ...doc.data(), 
    id: doc.id,
    created_at: doc.data().created_at.seconds, 
    updated_at: doc.data().updated_at.seconds,
});

export default {
    star: starDataParser
};