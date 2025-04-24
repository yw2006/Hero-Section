
export const generateRandomContent= (contentData)=>{
    const {headlines, subheadlines,images} = contentData
    const randomIndex=Math.floor(Math.random()*headlines.length)
    return {
        headline:headlines[randomIndex],
        subheadline:subheadlines[randomIndex],
        image:images[randomIndex]
    }
}