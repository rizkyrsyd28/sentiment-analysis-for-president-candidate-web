export interface Attribute{
    kalimat: string,
    aspect: string,
    opinion: string,
    true_tuple: number,
    sentiment: number,
    meta_aspect: string,
    meta_opinion: string
}

export interface ViewAttribute{
    position: number,
    kalimat: string,
    aspect: string,
    opinion: string,
    true_tuple: number,
    sentiment: number,
    meta_aspect: string,
    meta_opinion: string
}

export function toViewAttributes(arr:  any[]) :ViewAttribute[]{
    let data : ViewAttribute[] =[];
    let temp : ViewAttribute ={
        position: null,
        kalimat: "",
        aspect: "",
        opinion: "",
        true_tuple: null,
        sentiment: null,
        meta_aspect: "",
        meta_opinion: ""
    }
    let k = 1;
    for(let obj of arr){
        temp["position"] = k;
        temp["kalimat"] = obj[1];
        temp["aspect"] = obj[2];
        temp["opinion"] = obj[3];
        temp["true_tuple"] = obj[4];
        temp["sentiment"] = obj[5];
        temp["meta_aspect"] = obj[6];
        temp["meta_opinion"] = obj[7];
        data.push(temp);
        k++;
    }
    return data;
}