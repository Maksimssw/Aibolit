async function GET(url){
    let res = await fetch(url);
    
    if(!res.ok){
        throw new Error(`url: ${url}, status: ${res.status}`)
    }

    console.log(res);

    return await res.json();
}

export default GET;