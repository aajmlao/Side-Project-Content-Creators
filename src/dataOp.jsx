import { supabase } from "./client";

export async function getCreator() {
    const {data, error} = await supabase.from('creators').select();
    if (error) console.log('Error:', error);
    return data;
}

export async function createCreator({name, url, description, imageURL}) {
    const {error} = await supabase
    .from('creators')
    .insert({name: {name}, url: {url}, description: {description}, imageURL: {imageURL}})
    if (error) console.log('Error:', error);
}