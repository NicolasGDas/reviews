export let Reviews = []

export function addReviewTemp(review){
    Reviews.push(review)
    console.log("ADDED")
    console.log(Reviews)
}



export function getAddedReviews(){
    return Reviews
}