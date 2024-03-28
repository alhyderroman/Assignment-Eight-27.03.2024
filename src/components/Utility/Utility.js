const getStoredWishList=()=>{
    const storedWishList=localStorage.getItem('wishList');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}
const saveWishList=id=>{
    const storedWishList=getStoredWishList();
    const exist=storedWishList.find(bookId=>bookId===id);
    if(!exist){
        storedWishList.push(id);
        localStorage.setItem('wishList',JSON.stringify(storedWishList))
    }

}


const getStoredReadList=()=>{
    const storedReadList=localStorage.getItem('ReadList');
    if(storedReadList){
        return JSON.parse(storedReadList);
    }
    return [];
}

const saveReadList=id=>{
    const storedReadList=getStoredReadList();
    const exist=storedReadList.find(bookId=>bookId===id);
    if(!exist){
        storedReadList.push(id);
        localStorage.setItem('ReadList',JSON.stringify(storedReadList))
    }

}


export {saveWishList,getStoredWishList,saveReadList,getStoredReadList}