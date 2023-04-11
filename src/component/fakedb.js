// use local storage to manage cart data
const addToDb = id => {
    let JobData = getJobData();
    const quantity = JobData.find(cart => cart.id == id)
    if (quantity) {
        console.log('ami ace')
    }
    else {
        const cart = {id: id} 
        JobData.push(cart)
      
    }
    localStorage.setItem('jobs-data', JSON.stringify(JobData));
}



const getJobData = () => {
    let JobData = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('jobs-data');
    if (storedCart) {
        JobData = JSON.parse(storedCart);
    }
    return JobData;
}



export {
    addToDb,
    getJobData,
    
}
