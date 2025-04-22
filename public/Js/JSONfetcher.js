export async function createElements(jsonUrl, obj)
{
    await fetch(jsonUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        obj.generatePage(data);
        
    })
}