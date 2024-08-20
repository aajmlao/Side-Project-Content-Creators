import { supabase } from "./client";

export async function getCreators() {
    const {data, error} = await supabase.from('creators').select();
    if (error) console.log('Error:', error);
    return data;
}

export async function createCreator({name, url, description, imageURL}) {
    console.log(name)
    console.log(url)
    console.log(description)
    console.log(imageURL)
    const {error} = await supabase
    .from('creators')
    .insert({name, url, description, imageURL})
    if (error) console.log('Error:', error);
}

export async function getCreator(name) {
    // console.log(name)
    const {data, error} = await supabase.from('creators').select().eq('name', name);
    if (error) console.log('Error:', error);
    return data;
}


export async function updateCreator({name, newUrl, newDescription, newImageURL}) {
    const updates = {};

    if (newUrl !== null && newUrl !== '') {
        updates.url = newUrl;
    }
    if (newDescription !== null && newDescription !== '') {
        updates.description = newDescription;
    }
    if (newImageURL !== null && newImageURL !== '') {
        updates.imageURL = newImageURL;
    }

    if (Object.keys(updates).length === 0){
        console.log("No fields to updates")
    }
    console.log('link '+newUrl)
    const {error} = await supabase.from('creators').update(updates).eq('name', name);
    if (error) console.log('Error:', error);


}

export async function deleteCreator(name) {
    const {response, error} = await supabase.from('creators').delete().eq('name', name);
    if (error) console.log('Error:', error);
}