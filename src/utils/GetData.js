import axios from "axios"

let service = "https://celalkilnc.github.io/json_host/" 

export const getModuleData = async () => {
    try {
        const response = await axios.get(service +  "moduleDetails.json" );
        return response.data;
    } catch (error) {
        console.error("Error fetching modules:", error);
        return [];
    }
};

export const getQuoteOfDay = async () => {
    try {
        const response = await axios.get(service + "quoteOfDay.json"); 
        return response.data;
    } catch (error) {
        console.error("Error fetching Quote:", error);
        return [];
    }
}

export const getModuleDetail = async (id) => {
    try { 
        const response = await axios.get(service + `${id}.json`); 
        return response.data;

    } catch (error) {
        console.error("Error fetching Detail:", error);
        return [];
    }
}

export const getDocumentDetail = async (id) => {
    try { 
        const response = await axios.get(service + `documents/${id}.json`); 
        return response.data;

    } catch (error) {
        console.error("Error fetching Docs:", error);
        return [];
    }
}


