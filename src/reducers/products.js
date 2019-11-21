const initialState = [
  {
    id : 1,
    name : "Iphone 6 plus", 
    price : 400,
    status : true,
  },
  {
    id : 2,
    name : "Samsung", 
    price : 300,
    status : false,
  },
  {
    id : 1,
    name : "Nokia", 
    price : 500,
    status : true,
  }
];

const products = (state = initialState, action) => {
  switch(action.type){


    default: return [...state];
  }
}

export default products;