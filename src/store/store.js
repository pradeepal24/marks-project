import { create } from "zustand";
const useStore = create((set)=>({
    username:"",
    handleChangeUsername:(e)=>set({username:e.target.value}),
    isloggedIn:false,
    toggleLoggedIn:()=>set({isloggedIn:true})
}));
export default useStore;